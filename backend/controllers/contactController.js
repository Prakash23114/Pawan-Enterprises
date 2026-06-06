import Inspection from '../models/Inspection.js';
import resend from '../config/email.js'; // Imports the new Resend config
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

export const submitInspectionRequest = async (req, res) => {
  const filePath = req.file ? req.file.path : null;

  try {
    const { fullName, phone, email, serviceType, address, notes } = req.body;

    // Save metadata tracking safely to your MongoDB Atlas cluster
    const newInspection = new Inspection({
      fullName,
      phone,
      email: email || null,
      serviceType,
      address,
      notes: notes || null,
      leakageImage: filePath 
    });

    const savedLead = await newInspection.save();

    // Re-map the attachment file object format specifically for Resend API parameters
    const mailAttachments = [];
    if (req.file) {
      mailAttachments.push({
        filename: req.file.filename,
        path: path.resolve(req.file.path) // Forces absolute folder tracking paths
      });
    }

    const htmlPayload = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="background-color: #0f172a; padding: 15px; border-radius: 8px 8px 0 0; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 900;">PAWAN ENTERPRISES</h2>
          <p style="margin: 5px 0 0 0; font-size: 11px; color: #3b82f6; font-weight: bold; text-transform: uppercase;">NEW INSPECTION TICKET GENERATED</p>
        </div>
        
        <div style="padding: 20px 10px; color: #334155;">
          <p style="font-size: 14px; margin-bottom: 20px;">An on-site structural waterproofing evaluation request has been recorded. Lead info below:</p>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tr><td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 35%; color: #64748b;">LEAD ID:</td><td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-family: monospace;">${savedLead._id}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">CLIENT NAME:</td><td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #0f172a;">${fullName}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">PHONE NUMBER:</td><td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">EMAIL ID:</td><td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">${email || 'Not Provided'}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">SERVICE SPECIFIED:</td><td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">${serviceType}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">SITE ADDRESS:</td><td style="padding: 10px; border-bottom: 1px solid #f1f5f9; line-height: 1.4;">${address}</td></tr>
          </table>
          
          <div style="margin-top: 25px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #2563eb; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; font-size: 12px; color: #1e293b; text-transform: uppercase;">SCOPE / PROBLEM NOTES:</h4>
            <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #475569; font-style: italic;">"${notes || 'No notes added by user.'}"</p>
          </div>
        </div>
      </div>
    `;

    // SEND VIA THE SECURE RESEND HTTP API OVER STANDARD PORT 443 
    // (Bypasses Render's email ports ban flawlessly)
    const { error } = await resend.emails.send({
      from: 'Pawan Enterprises App <onboarding@resend.dev>',
      to: process.env.RECEIVER_EMAIL || 'mandalnageshwar4@gmail.com',
      subject: `⚠️ Leakage Report Lead: ${serviceType} Request from ${fullName}`,
      html: htmlPayload,
      attachments: mailAttachments
    });

    if (error) {
      throw new Error(`Resend Delivery Failed: ${error.message}`);
    }
    
    return res.status(201).json({ 
      success: true, 
      message: "Inspection request and image recorded securely.",
      leadId: savedLead._id 
    });

  } catch (error) {
    if (filePath) {
      fs.unlinkSync(filePath);
    }
    console.error("❌ Backend Error handling submission:", error.message);
    return res.status(500).json({ 
      success: false, 
      message: "Server encountered an execution error processing image payload." 
    });
  }
};