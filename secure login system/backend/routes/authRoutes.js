const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const User = require("../models/User");

// 🟢 Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// 🟢 SIGNUP
router.post("/signup", upload.single("image"), async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ msg: "All fields required" });
  }

  if (!req.file) {
    return res.json({ msg: "Image is required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    image: req.file.filename
  });

  await user.save();

  res.json({ msg: "Signup successful" });
});

// 🟢 LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({
    msg: "Login success",
    token,
    user: {
      name: user.name,
      email: user.email,
      image: user.image
    }
  });
});

module.exports = router;