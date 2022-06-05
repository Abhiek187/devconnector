import jwt from "jsonwebtoken";
import config from "config";

export default (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if there's no token
  if (token === undefined) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    /* JWT contains the following data:
    {
      "user": {
        "id": "USER_ID"
      },
      "iat": ISSUED_AT_TIME,
      "exp": EXPIRATION_TIME
    }
     */
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next(); // run the next action
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
