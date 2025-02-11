import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

export const authorizeRoles = (...allowedRoles) => {
    return(req, res, next) => {
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({error: "Access Denied"});
        }
        next();
    };
};

export const authMiddleware = (req, res, next) => {
    // fetching token from header
    const token = req.header("Authorization");

    //check if token exists
    if(!token){
        return res.status(401).json({msg:"No token, authorization denied"});
    }

    try{
        //verifying token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //attach user data to request object
        req.user = decoded;

        next();
    }
    catch(err){
        res.status(401).json({msg:"Token is not valid"});
    }
};

export default authMiddleware;