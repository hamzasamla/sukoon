const dotenv = require("dotenv");  // ✅ Use require() instead of import
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json()); //Parse JSON request bodies
app.use(cors()); //Enable CORS for all requests

const mongoDBConnString = process.env.MONGO_URI;

//Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI).then(() => {
            console.log('✅ Connected to MongoDB')
        }).catch((err) => {
                console.log("MongoDB Connection Error: ",err)
            });

// Sample Route
app.get('/', (req, res) => {
    res.send('Sukoon API is running....🎉');
});

// Start the server

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🚀`);
});