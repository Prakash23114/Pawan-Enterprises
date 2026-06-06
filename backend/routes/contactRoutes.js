import express from 'express';
import multer from 'multer';
import { submitInspectionRequest } from '../controllers/contactController.js';
import { validateContactInput } from '../middleware/validator.js';

const router = express.Router();

// Configure local disk storage for temporary uploads
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Make sure to create an "uploads" folder in your backend root directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
});

// Configure upload limits and file filters
const upload = multer({
  storage: storageConfig,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit matching frontend restriction
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only standard image files are permitted.'), false);
    }
  }
});

// Pass the upload.single middleware using the frontend field name key 'leakageImage'
router.post(
  '/request-inspection', 
  upload.single('leakageImage'), 
  validateContactInput, 
  submitInspectionRequest
);

export default router;