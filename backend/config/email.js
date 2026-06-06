import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT || 587),
  secure: false, // Must remain false for explicit STARTTLS port upgrade chains
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // ADVANCED OVERRIDES ENFORCING TRANSPORT PATHWAYS THROUGH RENDER FIREWALLS
  pool: true,             // Keeps the socket connection alive to prevent timeouts
  maxConnections: 3,      // Limit simultaneous connections
  socketTimeout: 30000,   // Wait 30 seconds before declaring timeout threshold
  connectionTimeout: 30000,
  tls: {
    // Overrides proxy intercept hostname conflicts on cloud infrastructure networks
    rejectUnauthorized: false,
    minVersion: 'TLSv1.2'  // Explicitly sets safe encryption protocols
  }
});

// Self-test helper confirming mail infrastructure availability on startup
export const verifyMailConnection = async () => {
  try {
    await transporter.verify();
    console.log('⚡ Nodemailer Pipeline Verified: Secure Mailing Connection Ready.');
  } catch (error) {
    console.error('❌ Nodemailer Connection Error:', error.message);
  }
};

export default transporter;