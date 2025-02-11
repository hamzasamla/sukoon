import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;
        const user = await User.findOne({email});
        if(user) return res.status(400).json({error:"User already exists"});
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({name, email, password:hashedPassword, role: role || "user"});
        await newUser.save();

        res.status(201).json({message:"User registered successfully"});
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:"Registration Failed"});
    }
};

export const login = async (req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user) return res.status(401).json({message:"Invalid Email or Password"});
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) return res.status(401).json({message:"Invalid Email or Password"});
        
        const token = jwt.sign({id:user._id, role: user.role}, JWT_SECRET, {expiresIn:"1h"});

        res.status(200).json({message:"Login Successfull", token, userId:user._id, role:user.role});
    }
    catch(err){
        res.status(500).json({error:"Login Failed " + err.message});
    }
};

// Get Profile
export const getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
      if (!user) return res.status(404).json({ error: "User not found" });
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  };