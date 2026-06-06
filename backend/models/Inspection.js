import mongoose from 'mongoose';

const inspectionSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, trim: true, lowercase: true, default: null },
  serviceType: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  notes: { type: String, trim: true, default: null },

  // NEW FIELD: Path or URL string for the uploaded asset
  leakageImage: { type: String, default: null },

  status: { type: String, enum: ['Pending', 'In Progress', 'Completed', 'Cancelled'], default: 'Pending' }
}, {
  timestamps: true
});

const Inspection = mongoose.model('Inspection', inspectionSchema);
export default Inspection;