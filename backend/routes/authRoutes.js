import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminUser = await User.findOne({ email });

    if (!adminUser || !(await adminUser.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid administrative email or password credentials.' });
    }

    // Issue a stateless token signed against your Render secret key variable
    const token = jwt.sign({ id: adminUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    return res.json({ success: true, token, message: 'Authorization verification successful.' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

export default router;