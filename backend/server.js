// server.js
const express = require('express');
const dotenv = require('dotenv');
const MongoDB=require('./config/dataBase')
const cookieParser = require('cookie-parser');
const cors = require("cors");

// require file
const adminRoutes = require('./router/adminrouter/adminrouter');

// dotenv config
dotenv.config();
MongoDB()

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (optional)
app.use(
  cors({
    origin: "http://localhost:8001", // <-- React frontend ka origin
    credentials: true, // <-- Cookies allow karega
  })
);
app.use(express.json());
app.use(cookieParser());

// Test Route
app.use('/api/admin', adminRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
