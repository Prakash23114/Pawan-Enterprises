import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import connectDatabase from './config/db.js';
import { verifyMailConnection } from './config/email.js';
import authRoutes from './routes/authRoutes.js';
import { protectRoute } from './middleware/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// 1. GLOBAL INITIALIZATION & CONFIGURATION
// ==========================================
const allowedOrigins = process.env.FRONTEND_URL 
  ? process.env.FRONTEND_URL.split(',') 
  : ['http://localhost:5173', 'https://pawan-enterprises-kappa.vercel.app'];

// ==========================================
// 2. CORE MIDDLEWARE PILLARS (MUST BE FIRST)
// ==========================================

// Setup CORS validation layers before mounting any router pathways
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile PWA caching layers, curl, or Postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
  },
  credentials: true
}));

// Ingest JSON request streams cleanly so controllers can parse req.body fields
app.use(express.json());

// ==========================================
// 3. ROUTING INFRASTRUCTURE LAYERS
// ==========================================

// Public Authentication Endpoint Paths (No token required to log in)
app.use('/api/auth', authRoutes);

// Main Inspection Submissions (Publicly accessible to your clients)
app.use('/api', contactRoutes);

/* 👉 FUTURE SECURE EXTENSION: 
If you build a separate lead viewer router later to display submitted inspections 
on an admin dashboard dashboard, secure it under the 'protectRoute' guard layer like this:

app.use('/api/admin/leads', protectRoute, adminLeadViewerRoutes);
*/

// Healthcheck route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'active', database: 'connected', timestamp: new Date() });
});

// ==========================================
// 4. PRODUCTION ENGINE SERVER STARTUP
// ==========================================
const startAppServer = async () => {
  await connectDatabase();
  await verifyMailConnection();

  app.listen(PORT, () => {
    console.log(`🚀 Full-Stack production engine active on local port link: ${PORT}`);
    console.log(`📡 Accepting PWA origins from: ${allowedOrigins.join(' and ')}`);
  });
};

startAppServer();