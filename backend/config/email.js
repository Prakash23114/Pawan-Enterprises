import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the Resend client with your Render API Key
const resend = new Resend(process.env.RESEND_API_KEY);

// Keep this helper alive so server.js doesn't crash on boot-up checking
export const verifyMailConnection = async () => {
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ Resend Client Error: Missing RESEND_API_KEY environment variable.');
  } else {
    console.log('⚡ Resend API Client Initialized: HTTP Mailing Pipeline Active.');
  }
};

export default resend;