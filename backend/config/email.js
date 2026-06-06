import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT || 587),
  secure: false, // Leave false for port 587 (STARTTLS)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // ADD THIS BLOCK TO SOLVE THE RENDER PROXY TIMEOUT
  tls: {
    // Tells the Node.js socket layer to bypass strict local proxy hostname checking
    rejectUnauthorized: false,
    // Forces the secure socket stream connection explicitly
    ciphers: 'SSLv3'
  }
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