import express from 'express';
import multer from 'multer';
import { submitInspectionRequest } from '../controllers/contactController.js';
import { validateContactInput } from '../middleware/validator.js';

const router = express.Router();

// CHANGE: Initialize Multer with memory storage instead of disk storage configuration
const storageConfig = multer.memoryStorage();

const upload = multer({
  storage: storageConfig,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit rule
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only standard image files are permitted.'), false);
    }
  }
});

router.post(
  '/request-inspection', 
  upload.single('leakageImage'), 
  validateContactInput, 
  submitInspectionRequest
);

export default router;