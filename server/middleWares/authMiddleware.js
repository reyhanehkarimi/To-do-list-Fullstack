const jwt = require("jsonwebtoken");

const authenticate  = (req,res,next) => {
    const authHeader = req.headers.authorization;

    if(!authenticate) {
        return res.status(401).json({ message: "No token provided" })
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "defaultSecret");
        req.userId = decoded.userId;
        next()
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" })
    }

}
module.exports = { authenticate }
