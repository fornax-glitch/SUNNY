import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('ENV CHECK', {
      hasApiKey: !!process.env.RESEND_API_KEY,
      to: process.env.CONTACT_TO_EMAIL,
      from: process.env.FROM_EMAIL,
    });

    const {
      name,
      email,
      phone,
      serviceType,
      cityProvince,
      message,
    } = req.body;

    console.log('FORM DATA', req.body);

    const response = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_TO_EMAIL || 'sabiri.amin@gmail.com',
      subject: `New Quote Request - ${serviceType}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${serviceType}
Location: ${cityProvince}

Message:
${message}
      `,
    });

    console.log('RESEND RESPONSE', response);

    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    console.error('RESEND ERROR', error);

    return res.status(500).json({
      success: false,
      error,
    });
  }
}