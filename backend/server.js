const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const eventRoute = require("./routes/eventRoute");
const couponRoute = require("./routes/couponRoute");
const errorHandler = require("./middleWare/errorHandler");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary").v2;
const path = require("path");
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow requests from specific origin (http://localhost:5173)
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};

// Use cors middleware with options
app.use(cors(corsOptions));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/events", eventRoute);
app.use("/api/coupons", couponRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
console.log(cloudinary.config());

// Error Middleware
app.use(errorHandler);

// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Starting server on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
