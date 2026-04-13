const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API
app.get("/api/data", (req, res) => {
  res.json({ message: "Backend connected successfully ✅" });
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});