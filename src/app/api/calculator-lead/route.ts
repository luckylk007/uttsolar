import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendCalculatorLeadEmail } from '@/lib/email';

const calculatorLeadSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile number'),
  district: z.string().min(2).max(50).trim(),
  monthlyBill: z.number().min(100).max(1000000),
  recommendedKw: z.number().min(0.5).max(1000),
  systemType: z.string().min(2).max(50).trim(),
  propertyType: z.string().min(2).max(50).trim(),
  preferredContact: z.enum(['phone', 'whatsapp']).optional(),
});

// Rate limit: 3 submissions per minute per IP (stricter for lead forms)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 3;

  const record = rateLimitMap.get(ip);
  if (!record || record.expiresAt < now) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  }
  if (record.count >= maxRequests) return true;
  record.count += 1;
  return false;
}

// Periodically clean up expired entries to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (record.expiresAt < now) rateLimitMap.delete(ip);
  }
}, 5 * 60 * 1000);

const MAX_BODY_SIZE = 10 * 1024; // 10 KB

export async function POST(request: Request) {
  try {
    // Validate Content-Type
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid request format.' },
        { status: 415 }
      );
    }

    // IP-based rate limiting (use first IP from x-forwarded-for)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      );
    }

    // Body size limit
    const rawBody = await request.text();
    if (rawBody.length > MAX_BODY_SIZE) {
      return NextResponse.json(
        { error: 'Request too large.' },
        { status: 413 }
      );
    }

    // Safe JSON parse
    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { error: 'Invalid request format.' },
        { status: 400 }
      );
    }

    // Server-side validation
    const parsed = calculatorLeadSchema.safeParse(body);
    if (!parsed.success) {
      // Generic error — do NOT expose Zod schema details to client
      return NextResponse.json(
        { error: 'Invalid submission. Please check your inputs and try again.' },
        { status: 400 }
      );
    }

    const lead = parsed.data;

    // Send instant calculator enquiry lead notification to Gmail via Resend
    await sendCalculatorLeadEmail(lead).catch((err) => {
      console.error('[Calculator Lead API] Failed to dispatch Resend email:', err);
    });

    // Safe log: no PII (name and mobile are NOT logged)
    console.log(
      `[Calculator Lead] district=${lead.district} kw=${lead.recommendedKw} type=${lead.systemType}`
    );

    return NextResponse.json(
      { success: true, message: 'Calculator enquiry received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Calculator Lead API] Error:', error instanceof Error ? error.message : 'unknown');
    return NextResponse.json(
      { error: 'Something went wrong. Please call us directly.' },
      { status: 500 }
    );
  }
}

// Reject all non-POST methods explicitly
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
export async function PATCH() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
