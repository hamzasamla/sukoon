import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json()); //Parse JSON request bodies
app.use(cors()); //Enable CORS for all requests

// Routes
app.use("/api/auth", authRoutes);


//Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI).then(() => {
            console.log('✅ Connected to MongoDB')
        }).catch((err) => {
                console.log("MongoDB Connection Error: ",err)
            });


// Start the server
app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT} 🚀`);
});