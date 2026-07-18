import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    // Get Authorization Header
    const authHeader = req.headers.authorization;

    // Check Token
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access Token Required",
      });
    }

    // Extract Token
    const token = authHeader.split(" ")[1];

    // Verify Token
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    // Store User Data
    req.user = decoded;

    // Next Middleware
    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Access Token",
    });
  }
};

export default verifyToken;