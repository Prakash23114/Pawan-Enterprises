import jwt from 'jsonwebtoken';

export const protectRoute = (req, res, next) => {
  let token;

  // Read the token from the standard HTTP Authorization Header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access Denied: Missing Authentication Token.' });
  }

  try {
    const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedPayload; // Inject decoded user payload into request stream
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Session Expired or Invalid Token Signature.' });
  }
};