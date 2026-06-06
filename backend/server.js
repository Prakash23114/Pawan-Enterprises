import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import connectDatabase from './config/db.js';
import { verifyMailConnection } from './config/email.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ENHANCED PWA-COMPATIBLE CORS CONFIGURATION
const allowedOrigins = process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',') : ['http://localhost:5173'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, or Postman tools)
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

app.use(express.json());

// Main Root Level Routes Connection Mapping
app.use('/api', contactRoutes);

// Healthcheck route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'active', database: 'connected', timestamp: new Date() });
});

// Production Server Startup Initialization Hook
const startAppServer = async () => {
  await connectDatabase();
  await verifyMailConnection();

  app.listen(PORT, () => {
    console.log(`🚀 Full-Stack production engine active on local port link: ${PORT}`);
    console.log(`📡 Accepting PWA origins from: ${allowedOrigins.join(' and ')}`);
  });
};

startAppServer();