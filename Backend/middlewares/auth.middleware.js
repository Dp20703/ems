const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded", decoded);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        console.log("user", user);
        return next()
    } catch (error) {
        console.log("Auth middleware error:", error);
        return res.status(401).json({ message: "Unauthorized" })
    }
}