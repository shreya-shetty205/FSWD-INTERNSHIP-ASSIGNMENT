require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// DB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);

app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});