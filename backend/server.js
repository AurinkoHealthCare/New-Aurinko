const express = require('express');
const dotenv = require('dotenv');
const MongoDB = require('./config/dataBase');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");

// .env config
dotenv.config();

// Routers
const authRoutes = require("./router/adminroutes/adminrouter");
const imageRoutes = require('./router/imagesliderrouter/imagesliderrouter');
const visitorRouter = require("./router/totalvisitors/visitorsrouter");
const contact = require('./router/contact/contact');
const products=require('./router/products/productsrouter')

// Connect to MongoDB
MongoDB();

const app = express();
app.set("trust proxy", 1);
const PORT = process.env.PORT || 4040;

// Ensure uploads folder exists
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:8001",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200, // adjust as needed
    message: "Too many requests, please try again later.",
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/visitors", visitorRouter);
app.use('/api/submit', contact);
app.use('/api/products',products)

// Error Handler
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.message);
  res.status(500).json({ success: false, error: "Internal Server Error" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
