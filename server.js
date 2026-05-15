import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  try {
    console.log('REQUEST RECEIVED', req.body);

    const {
      name,
      email,
      phone,
      serviceType,
      cityProvince,
      message,
    } = req.body;

    const response = await resend.emails.send({
      from: `SunnySideUp <${process.env.FROM_EMAIL}>`,
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

    console.log('EMAIL SENT', response);

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error('EMAIL ERROR', error);

    res.status(500).json({
      success: false,
      error,
    });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});