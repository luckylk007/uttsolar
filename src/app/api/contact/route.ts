import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactLeadEmail } from '@/lib/email';

const contactSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile number'),
  email: z
    .string()
    .email()
    .max(254)
    .optional()
    .or(z.literal('')),
  district: z.string().min(2).max(50).trim(),
  service: z.string().min(2).max(100).trim(),
  monthlyBill: z.number().min(0).max(1000000).optional(),
  message: z.string().max(1000).trim().optional(),
  intent: z.string().max(50).trim().optional(),
});

// Rate limit: 3 submissions per minute per IP (stricter for lead forms)
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
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      // Generic error — do NOT expose Zod schema details to client
      return NextResponse.json(
        { error: 'Invalid submission. Please check your inputs and try again.' },
        { status: 400 }
      );
    }

    const lead = parsed.data;

    // Send instant lead notification email to Gmail via Resend
    await sendContactLeadEmail(lead).catch((err) => {
      console.error('[Contact API] Failed to dispatch Resend email:', err);
    });

    // Safe log: no PII (name and phone are NOT logged)
    console.log(
      `[UTTsolar Lead] district=${lead.district} service=${lead.service} bill=${lead.monthlyBill ?? 'N/A'}`
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Your solar consultation request has been recorded successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    // Generic error — do NOT expose internals to client
    console.error('[Contact API] Error:', error instanceof Error ? error.message : 'unknown');
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
