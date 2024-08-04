import jwt from "jsonwebtoken";
import User from "../models/user.mode.js";

export const protectRoute = async (req,res, next)=>{
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(400).json({error: "User not authorised"});
        }
        const decoded= jwt.verify(token, process.env.JWT_secret);
        if (!decoded) {
            return res.status(400).json({error: "Unauthorised - invalid token"});
        }
        const user = await User.findById(decoded.userId);

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({error});
    }

}