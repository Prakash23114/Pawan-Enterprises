import { body, validationResult } from 'express-validator';

export const validateContactInput = [
  body('fullName')
    .trim()
    .notEmpty().withMessage('Name field is strictly required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long')
    .escape(),
  body('phone')
    .trim()
    .notEmpty().withMessage('Phone number is strictly required')
    .matches(/^[0-9+\s-]{10,15}$/).withMessage('Provide a valid technical phone schema format'),
  body('email')
    .trim()
    .optional({ checkFalsy: true })
    .isEmail().withMessage('Provide a valid email context structure')
    .normalizeEmail(),
  body('serviceType')
    .trim()
    .notEmpty().withMessage('Service specification required')
    .escape(),
  body('address')
    .trim()
    .notEmpty().withMessage('Site address location parameter is required')
    .escape(),
  body('notes')
    .trim()
    .optional({ checkFalsy: true })
    .escape(),

  // Middleware hook to catch and return compilation error arrays before hitting controllers
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  }
];