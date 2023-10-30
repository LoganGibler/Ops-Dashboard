import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.header("Authorization");

  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid authorization header" });
  }

  const token = authorizationHeader.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Authorization token not found" });
  }
  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
    console.log(decoded);
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
export default authMiddleware;

//////////
