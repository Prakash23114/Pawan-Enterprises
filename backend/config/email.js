import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Self-test helper confirming mail infrastructure availability on startup
export const verifyMailConnection = async () => {
  try {
    await transporter.verify();
    console.log('⚡ Nodemailer Pipeline Verified: Secure Mailing Connection Ready.');
  } catch (error) {
    console.error('❌ Nodemailer Connection Error: Check App Password credentials.', error.message);
  }
};

export default transporter;