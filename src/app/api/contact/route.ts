import { NextResponse } from 'next/server';
import { z } from 'zod';
import { validatePostalCombination } from '@/data/locations/postalData';

// Input Validation Schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile number'),
  email: z.string().email().optional().or(z.literal('')),
  state: z.string().optional(),
  district: z.string().min(2).max(50),
  pincode: z.string().optional().or(z.literal('')),
  postOffice: z.string().optional().or(z.literal('')),
  service: z.string().min(2).max(100),
  monthlyBill: z.number().optional(),
  message: z.string().max(1000).optional(),
  intent: z.string().max(50).optional(),
});

// Simple in-memory rate limiting map (IP based)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 10; // Max 10 requests per minute

  const record = rateLimitMap.get(ip);
  if (!record || record.expiresAt < now) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate payload against Zod schema
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid submission data', details: parsed.error.format() },
        { status: 400 }
      );
    }

    const lead = parsed.data;

    // Validate postal combination if provided
    if (lead.pincode && !validatePostalCombination(lead.district, lead.pincode, lead.postOffice || undefined)) {
      return NextResponse.json(
        { error: 'Invalid PIN Code / Post Office for the selected district.' },
        { status: 400 }
      );
    }

    // Sanitized Lead Logging
    console.log(`[UTTsolar Lead Received] Name: ${lead.name}, Phone: ${lead.phone}, District: ${lead.district}, PIN: ${lead.pincode || 'N/A'}, PostOffice: ${lead.postOffice || 'N/A'}, Service: ${lead.service}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Your solar consultation request has been recorded successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please call us directly.' },
      { status: 500 }
    );
  }
}
