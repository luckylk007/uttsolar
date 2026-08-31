import { Resend } from 'resend';

// Initialize Resend client if API key is provided
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Target recipient email (defaults to info@uttsolar.in or environment setting)
const DEFAULT_TO_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL || 'info@uttsolar.in';
const DEFAULT_FROM_EMAIL =
  process.env.LEAD_FROM_EMAIL || 'UTTsolar Leads <onboarding@resend.dev>';

export interface ContactLeadPayload {
  name: string;
  phone: string;
  email?: string;
  district: string;
  service: string;
  monthlyBill?: number;
  message?: string;
  intent?: string;
}

export interface CalculatorLeadPayload {
  name: string;
  mobile: string;
  district: string;
  monthlyBill: number;
  recommendedKw: number;
  systemType: string;
  propertyType: string;
  preferredContact?: 'phone' | 'whatsapp';
}

/**
 * Send Contact / Free Site Survey Lead to Gmail via Resend
 */
export async function sendContactLeadEmail(lead: ContactLeadPayload) {
  if (!resend) {
    console.warn('[Resend] RESEND_API_KEY is not configured in environment variables. Email notification skipped.');
    return { success: false, reason: 'MISSING_API_KEY' };
  }

  const cleanPhone = lead.phone.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
    `Hi ${lead.name}, thank you for contacting UTTsolar regarding ${lead.service} in ${lead.district}. How can we assist you?`
  )}`;
  const telUrl = `tel:+91${cleanPhone.slice(-10)}`;

  // Determine lead source badge & subject prefix
  let sourceBadge = '⚡ Website Site Survey Lead';
  let subjectPrefix = '☀️ [Site Survey Lead]';

  if (lead.intent === 'quote-popup') {
    sourceBadge = '🔔 Instant Quote Popup Lead';
    subjectPrefix = '🔔 [Popup Quote Lead]';
  } else if (lead.intent === 'quote') {
    sourceBadge = '📋 Quotation Request Lead';
    subjectPrefix = '📋 [Quotation Lead]';
  }

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Solar Lead Notification</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f3; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #17220F;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f6f3; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e7de;" cellspacing="0" cellpadding="0">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #17220F 0%, #1F2E14 100%); padding: 28px 24px; text-align: center; border-bottom: 4px solid #46A304;">
              <span style="display: inline-block; background-color: rgba(70, 163, 4, 0.25); color: #70C92F; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(70, 163, 4, 0.4); margin-bottom: 8px;">
                ${sourceBadge}
              </span>
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
                Solar Consultation Request
              </h1>
              <p style="margin: 6px 0 0 0; color: #cbd5e1; font-size: 13px;">
                Location: <strong style="color: #FFDE21;">${lead.district}</strong> District, Uttarakhand
              </p>
            </td>
          </tr>

          <!-- Quick Action Buttons -->
          <tr>
            <td style="padding: 20px 24px 10px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="48%" align="center">
                    <a href="${whatsappUrl}" target="_blank" style="display: block; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 16px; border-radius: 8px; text-align: center;">
                      💬 Chat on WhatsApp
                    </a>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" align="center">
                    <a href="${telUrl}" style="display: block; background-color: #FFDE21; color: #17220F; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 16px; border-radius: 8px; text-align: center;">
                      📞 Call Customer
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Customer Lead Details Table -->
          <tr>
            <td style="padding: 10px 24px 24px 24px;">
              <table role="presentation" width="100%" style="border-collapse: collapse; background-color: #f8faf6; border-radius: 12px; overflow: hidden; border: 1px solid #e2e7de;" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de; width: 38%;">👤 Customer Name</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">📞 Phone Number</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #46A304; border-bottom: 1px solid #e2e7de;">
                    <a href="${telUrl}" style="color: #46A304; text-decoration: none;">+91 ${cleanPhone.slice(-10)}</a>
                  </td>
                </tr>
                ${
                  lead.email
                    ? `<tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">✉️ Email Address</td>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.email}</td>
                </tr>`
                    : ''
                }
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">📍 District</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.district}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">☀️ Requested Service</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.service}</td>
                </tr>
                ${
                  lead.monthlyBill
                    ? `<tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">⚡ Monthly Bill</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #17220F; border-bottom: 1px solid #e2e7de;">₹${lead.monthlyBill.toLocaleString('en-IN')}</td>
                </tr>`
                    : ''
                }
                ${
                  lead.intent
                    ? `<tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">🏷️ Lead Type</td>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.intent}</td>
                </tr>`
                    : ''
                }
                ${
                  lead.message
                    ? `<tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; vertical-align: top;">💬 Message / Details</td>
                  <td style="padding: 12px 16px; font-size: 13px; color: #17220F; line-height: 1.5;">${lead.message}</td>
                </tr>`
                    : ''
                }
              </table>
            </td>
          </tr>

          <!-- Footer Info -->
          <tr>
            <td style="background-color: #f7f9f5; padding: 16px 24px; text-align: center; border-top: 1px solid #e2e7de;">
              <p style="margin: 0; font-size: 12px; color: #66705F;">
                Received on <strong>UTTsolar.in</strong> Lead Capture Portal • ${new Date().toLocaleString('en-IN', {
                  timeZone: 'Asia/Kolkata',
                })} (IST)
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    const result = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: [DEFAULT_TO_EMAIL],
      subject: `${subjectPrefix} ${lead.name} - ${lead.district} (${lead.service})`,
      html: htmlContent,
      replyTo: lead.email || undefined,
    });

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('[Resend Error - Contact Lead]:', error);
    return { success: false, error };
  }
}

/**
 * Send Calculator Enquiry Lead to Gmail via Resend
 */
export async function sendCalculatorLeadEmail(lead: CalculatorLeadPayload) {
  if (!resend) {
    console.warn('[Resend] RESEND_API_KEY is not configured in environment variables. Email notification skipped.');
    return { success: false, reason: 'MISSING_API_KEY' };
  }

  const cleanPhone = lead.mobile.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
    `Hi ${lead.name}, thank you for calculating your solar savings with UTTsolar. For your monthly bill of ₹${lead.monthlyBill}, we recommend a ${lead.recommendedKw} kW system with ₹85,800 subsidy. When can we arrange a free site survey?`
  )}`;
  const telUrl = `tel:+91${cleanPhone.slice(-10)}`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Solar Calculator Enquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f3; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #17220F;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f6f3; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e7de;" cellspacing="0" cellpadding="0">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #17220F 0%, #1F2E14 100%); padding: 28px 24px; text-align: center; border-bottom: 4px solid #FFDE21;">
              <span style="display: inline-block; background-color: rgba(255, 222, 33, 0.25); color: #FFDE21; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(255, 222, 33, 0.4); margin-bottom: 8px;">
                🧮 Calculator Sizing Lead
              </span>
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
                Solar Savings Sizing Enquiry
              </h1>
              <p style="margin: 6px 0 0 0; color: #cbd5e1; font-size: 13px;">
                Recommended: <strong style="color: #46A304; font-size: 15px;">${lead.recommendedKw} kW System</strong> • ${lead.district}
              </p>
            </td>
          </tr>

          <!-- Quick Action Buttons -->
          <tr>
            <td style="padding: 20px 24px 10px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="48%" align="center">
                    <a href="${whatsappUrl}" target="_blank" style="display: block; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 16px; border-radius: 8px; text-align: center;">
                      💬 Chat on WhatsApp
                    </a>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" align="center">
                    <a href="${telUrl}" style="display: block; background-color: #FFDE21; color: #17220F; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 16px; border-radius: 8px; text-align: center;">
                      📞 Call Customer
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Customer Lead Details Table -->
          <tr>
            <td style="padding: 10px 24px 24px 24px;">
              <table role="presentation" width="100%" style="border-collapse: collapse; background-color: #f8faf6; border-radius: 12px; overflow: hidden; border: 1px solid #e2e7de;" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de; width: 40%;">👤 Customer Name</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">📞 Mobile Number</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #46A304; border-bottom: 1px solid #e2e7de;">
                    <a href="${telUrl}" style="color: #46A304; text-decoration: none;">+91 ${cleanPhone.slice(-10)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">📍 District</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.district}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">⚡ Monthly Bill</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #17220F; border-bottom: 1px solid #e2e7de;">₹${lead.monthlyBill.toLocaleString('en-IN')} / month</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">☀️ Recommended Sizing</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 800; color: #46A304; border-bottom: 1px solid #e2e7de;">${lead.recommendedKw} kW (${lead.systemType})</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">🏠 Property Type</td>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.propertyType}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F;">📲 Preferred Contact</td>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #17220F; text-transform: capitalize;">${lead.preferredContact || 'Phone / WhatsApp'}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer Info -->
          <tr>
            <td style="background-color: #f7f9f5; padding: 16px 24px; text-align: center; border-top: 1px solid #e2e7de;">
              <p style="margin: 0; font-size: 12px; color: #66705F;">
                Received on <strong>UTTsolar.in</strong> Solar Calculator • ${new Date().toLocaleString('en-IN', {
                  timeZone: 'Asia/Kolkata',
                })} (IST)
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    const result = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: [DEFAULT_TO_EMAIL],
      subject: `⚡ New Calculator Lead: ${lead.name} - ${lead.recommendedKw} kW (${lead.district})`,
      html: htmlContent,
    });

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('[Resend Error - Calculator Lead]:', error);
    return { success: false, error };
  }
}