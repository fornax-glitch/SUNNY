import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, serviceType, cityProvince, message } = req.body;

    if (!name || !email || !phone || !serviceType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailContent = `
New Quote Request - SunnySideUp

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${serviceType}
Location: ${cityProvince}

Message:
${message || 'No additional details'}
`;

    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `New Quote Request - ${serviceType}`,
      text: emailContent,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Email failed to send' });
  }
}