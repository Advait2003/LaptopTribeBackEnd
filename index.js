const express = require("express");
const PORT = process.env.PORT || 5000;
const laptopRoutes = require("./routes/laptopRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path"); // Import path to handle file paths

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS

// Serve static image files from the public/images directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/SVGs', express.static(path.join(__dirname, 'public/SVGs')));

// Routes
app.use('/api', laptopRoutes);
app.get("/api/manufacturers", (req, res) => {
  const manufacturers = [
    { name: "Dell", rating: 8.5, modelsReviewed: 32, popularity: 90 },
    { name: "HP", rating: 7.8, modelsReviewed: 28, popularity: 85 },
    { name: "Apple", rating: 9.2, modelsReviewed: 15, popularity: 95 },
    { name: "Lenovo", rating: 8.0, modelsReviewed: 40, popularity: 88 },
    // More manufacturers...
  ];

  res.json({ manufacturers });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
