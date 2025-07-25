const express = require('express');
const dotenv = require('dotenv');
const MongoDB=require('./config/dataBase')
const cookieParser = require('cookie-parser');
const cors = require("cors");
// .env
dotenv.config();
// require file
const authRoutes = require("./router/adminroutes/adminrouter");
const imageRoutes = require('./router/imagesliderrouter/imagesliderrouter');

MongoDB()
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (optional)
app.use(
  cors({
    origin: "http://localhost:8001", // React frontend ka origin
    credentials: true, // Cookies allow karega
  })
);
app.use(express.json());
app.use(cookieParser());

// Test Route

// authroute
app.use("/api/auth", authRoutes);
// imagesliderroute
app.use('/api/images', imageRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
