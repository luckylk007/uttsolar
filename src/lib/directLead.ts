/**
 * Direct Client-Side Lead Dispatcher (Dual-Mode Failover for Static Hostings like Hostinger Shared/Git)
 */

export interface DirectLeadPayload {
  name: string;
  phone: string;
  email?: string;
  district: string;
  service: string;
  monthlyBill?: number;
  message?: string;
  intent?: string;
  recommendedKw?: number;
  propertyType?: string;
  preferredContact?: string;
}

export async function dispatchDirectResendLead(lead: DirectLeadPayload): Promise<boolean> {
  try {
    const rawKey = 'cmVfZTZDZHVheVpfRWhmWGtLRkRGNFhyamp5OWhaa25aRzc=';
    const apiKey = typeof window !== 'undefined' ? atob(rawKey) : Buffer.from(rawKey, 'base64').toString('utf-8');

    const cleanPhone = lead.phone.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/91${cleanPhone.slice(-10)}?text=${encodeURIComponent(
      `Hi ${lead.name}, thank you for contacting UTTsolar regarding ${lead.service} in ${lead.district}. How can we assist you?`
    )}`;
    const telUrl = `tel:+91${cleanPhone.slice(-10)}`;

    const isCalculator = !!lead.recommendedKw;
    const subjectPrefix = isCalculator
      ? `🧮 [Calculator Lead]`
      : lead.intent === 'quote-popup'
      ? `🔔 [Popup Quote Lead]`
      : `☀️ [Site Survey Lead]`;

    const title = isCalculator ? 'Solar Savings Sizing Enquiry' : 'Solar Consultation Request';
    const subtitle = isCalculator
      ? `Recommended: ${lead.recommendedKw} kW System • ${lead.district}`
      : `Location: ${lead.district} District, Uttarakhand`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New Solar Lead</title></head>
<body style="margin: 0; padding: 0; background-color: #f4f6f3; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #17220F;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f6f3; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e7de;" cellspacing="0" cellpadding="0">
          <tr>
            <td style="background: linear-gradient(135deg, #17220F 0%, #1F2E14 100%); padding: 28px 24px; text-align: center; border-bottom: 4px solid #46A304;">
              <span style="display: inline-block; background-color: rgba(70, 163, 4, 0.25); color: #70C92F; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; margin-bottom: 8px;">
                ⚡ New Website Lead
              </span>
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 800;">${title}</h1>
              <p style="margin: 6px 0 0 0; color: #cbd5e1; font-size: 13px;">${subtitle}</p>
            </td>
          </tr>
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
                ${lead.email ? `<tr><td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">✉️ Email Address</td><td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.email}</td></tr>` : ''}
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">📍 District</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.district}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">☀️ Service / Details</td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.service}</td>
                </tr>
                ${lead.monthlyBill ? `<tr><td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">⚡ Monthly Bill</td><td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #17220F; border-bottom: 1px solid #e2e7de;">₹${lead.monthlyBill.toLocaleString('en-IN')}</td></tr>` : ''}
                ${lead.recommendedKw ? `<tr><td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">⚡ System Size</td><td style="padding: 12px 16px; font-size: 14px; font-weight: 800; color: #46A304; border-bottom: 1px solid #e2e7de;">${lead.recommendedKw} kW</td></tr>` : ''}
                ${lead.propertyType ? `<tr><td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; border-bottom: 1px solid #e2e7de;">🏠 Property Type</td><td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #17220F; border-bottom: 1px solid #e2e7de;">${lead.propertyType}</td></tr>` : ''}
                ${lead.message ? `<tr><td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #66705F; vertical-align: top;">💬 Message</td><td style="padding: 12px 16px; font-size: 13px; color: #17220F; line-height: 1.5;">${lead.message}</td></tr>` : ''}
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f7f9f5; padding: 16px 24px; text-align: center; border-top: 1px solid #e2e7de;">
              <p style="margin: 0; font-size: 12px; color: #66705F;">
                Received on <strong>UTTsolar.in</strong> Lead Capture • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'UTTsolar Leads <onboarding@resend.dev>',
        to: ['luckykumar21099@gmail.com'],
        subject: `${subjectPrefix} ${lead.name} - ${lead.district} (${lead.service})`,
        html: htmlContent,
      }),
    });

    return res.ok;
  } catch (e) {
    console.error('Direct Resend dispatch error:', e);
    return false;
  }
}
