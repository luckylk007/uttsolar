import { NextResponse } from 'next/server';
import { z } from 'zod';

const calculatorLeadSchema = z.object({
  name: z.string().min(2).max(100),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile number'),
  district: z.string().min(2).max(50),
  monthlyBill: z.number().min(100).max(1000000),
  recommendedKw: z.number().min(0.5).max(1000),
  systemType: z.string().min(2).max(50),
  propertyType: z.string().min(2).max(50),
  preferredContact: z.enum(['phone', 'whatsapp']).optional(),
});

const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 10;

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
    const parsed = calculatorLeadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid submission data', details: parsed.error.format() },
        { status: 400 }
      );
    }

    const lead = parsed.data;
    console.log(`[Calculator Lead] ${lead.name} (${lead.mobile}) — ${lead.recommendedKw} kW in ${lead.district}`);

    return NextResponse.json(
      { success: true, message: 'Calculator enquiry received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Calculator Lead API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please call us directly.' },
      { status: 500 }
    );
  }
}
