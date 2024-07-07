const jwt = require("jsonwebtoken");
<<<<<<< HEAD
=======

>>>>>>> 8e73524 (add some front end and backend files)
const User = require("../modals/User");
exports.authenticateToken = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
<<<<<<< HEAD
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
=======
      console.log("Token", token);
      const decoded = jwt.verify(token, "abc123");
      console.log("decoded", decoded);

>>>>>>> 8e73524 (add some front end and backend files)
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Not Autorized" });
    }
  }
  if (!token) {
<<<<<<< HEAD
    res.status(400).json({ message: " Not Authorizeda" });
=======
    res.status(400).json({ message: " Token Not available" });
>>>>>>> 8e73524 (add some front end and backend files)
  }
};
