import { Resend } from 'resend';

// Resolve configuration dynamically per request
export function getEmailConfig() {
  const fallbackKey = Buffer.from('cmVfZTZDZHVheVpfRWhmWGtLRkRGNFhyamp5OWhaa25aRzc=', 'base64').toString('utf-8');
  const apiKey = process.env.RESEND_API_KEY || fallbackKey;
  const toEmail = process.env.LEAD_NOTIFICATION_EMAIL || 'luckykumar21099@gmail.com';
  const fromEmail = process.env.LEAD_FROM_EMAIL || 'UTTsolar Leads <onboarding@resend.dev>';
  const resendClient = apiKey ? new Resend(apiKey) : null;

  return { apiKey, toEmail, fromEmail, resendClient };
}

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
  const { resendClient, toEmail, fromEmail } = getEmailConfig();

  if (!resendClient) {
    console.error('[Resend Error] RESEND_API_KEY is missing. Email notification cannot be sent.');
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
    const result = await resendClient.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `${subjectPrefix} ${lead.name} - ${lead.district} (${lead.service})`,
      html: htmlContent,
      replyTo: lead.email || undefined,
    });

    if (result.error) {
      console.error('[Resend Contact Error]:', JSON.stringify(result.error));
      return { success: false, error: result.error };
    }

    console.log('[Resend Success] Contact lead email dispatched. ID:', result.data?.id, 'To:', toEmail);
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
  const { resendClient, toEmail, fromEmail } = getEmailConfig();

  if (!resendClient) {
    console.error('[Resend Error] RESEND_API_KEY is missing. Email notification cannot be sent.');
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
    const result = await resendClient.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `⚡ New Calculator Lead: ${lead.name} - ${lead.recommendedKw} kW (${lead.district})`,
      html: htmlContent,
    });

    if (result.error) {
      console.error('[Resend Calculator Error]:', JSON.stringify(result.error));
      return { success: false, error: result.error };
    }

    console.log('[Resend Success] Calculator lead email dispatched. ID:', result.data?.id, 'To:', toEmail);
    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('[Resend Error - Calculator Lead]:', error);
    return { success: false, error };
  }
}