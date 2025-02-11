import express from "express";
import authMiddleware, { authorizeRoles } from "../middleware/authMiddleware.js";
import { register, login, getProfile } from "../controllers/authController.js";
import { validateRegister } from "../validators/authvalidator.js";

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);
router.get("/admin", authMiddleware, authorizeRoles("admin"), (req,res)=>{
    res.json({message:"Welcome Admin"})
});
router.get("/therapist", authMiddleware, authorizeRoles("therapist"), (req,res)=>{
    res.json({message:"Welcome Therapist"})
});

export default router;