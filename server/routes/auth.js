import express from "express";

const router = express.Router();

// Test route
router.get("/", (req, res) => {
    res.send("Auth route working!");
});

export default router;