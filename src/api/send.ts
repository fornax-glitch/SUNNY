// api/send.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      serviceType,
      cityProvince,
      message
    } = req.body;

    const data = await resend.emails.send({
      from: 'SunnySideUp <onboarding@resend.dev>',
      to: ['YOUR_EMAIL_HERE@example.com'],
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Location:</strong> ${cityProvince}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Email failed to send' });
  }
}