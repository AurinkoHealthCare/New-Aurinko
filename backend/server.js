const express = require('express');
const dotenv = require('dotenv');
const MongoDB = require('./config/dataBase');
const cookieParser = require('cookie-parser');
const cors = require("cors");

// .env config
dotenv.config();

// Routers
const authRoutes = require("./router/adminroutes/adminrouter");
const imageRoutes = require('./router/imagesliderrouter/imagesliderrouter');

// Connect to MongoDB
MongoDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:8001", // React frontend
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// 🟢 Serve static files from uploads folder
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/images", imageRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
