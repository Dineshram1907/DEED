// Server-Side Email Endpoint Handler for DEED Studio Project Inquiries
// IMPORTANT: This file executes server-side.
// BCC recipient dinesh54321ram@gmail.com remains strictly hidden from client-side bundles.

export interface EmailPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  projectOverview: string;
  services: string[];
  budget: string;
  timeline: string;
  botcheck?: string;
}

export const EMAIL_TO = process.env.EMAIL_TO || 'deed.technologia@gmail.com';
export const EMAIL_BCC = process.env.EMAIL_BCC || 'dinesh54321ram@gmail.com';

export async function handleContactSubmission(payload: EmailPayload): Promise<{ success: boolean; message: string }> {
  // Honeypot spam check: if botcheck is filled, silently reject
  if (payload.botcheck) {
    return { success: false, message: 'Spam detected.' };
  }

  if (!payload.name || !payload.email || !payload.projectOverview) {
    return { success: false, message: 'Required fields missing.' };
  }

  const subject = `New DEED Project Enquiry — ${payload.name}${payload.company ? ` (${payload.company})` : ''}`;
  
  const emailBody = `
==================================================
NEW DEED PROJECT ENQUIRY
==================================================

Name: ${payload.name}
Company: ${payload.company || 'N/A'}
Email: ${payload.email}
Phone/WhatsApp: ${payload.phone || 'N/A'}

Services Needed: ${payload.services.length > 0 ? payload.services.join(', ') : 'Custom Scope'}
Budget Range: ${payload.budget}
Timeline: ${payload.timeline}

--------------------------------------------------
PROJECT OVERVIEW:
--------------------------------------------------
${payload.projectOverview}

==================================================
Sent via DEED Studio Web Portal
Primary: ${EMAIL_TO}
BCC: [PROTECTED SERVER RECIPIENT]
==================================================
`;

  console.log(`[DEED Server Mailer] Sending inquiry from ${payload.email} to ${EMAIL_TO}...`);
  console.log(`[DEED Server Mailer] Subject: ${subject}`);
  console.log(emailBody);

  // In production, integrate with SendGrid, Resend, or AWS SES using server environment variables.
  // Resend Example:
  // await resend.emails.send({
  //   from: 'DEED Studio <enquiries@deed.in>',
  //   to: [EMAIL_TO],
  //   bcc: [EMAIL_BCC],
  //   subject: subject,
  //   text: emailBody
  // });

  return {
    success: true,
    message: "Received. We'll review the project and get back to you."
  };
}
