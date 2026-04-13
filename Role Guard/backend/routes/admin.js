const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.js");
const role = require("../middleware/roleMiddleware.js");

router.get("/dashboard", auth, role(["admin"]), (req, res) => {
  res.json({ msg: "Welcome Admin Dashboard" });
});

module.exports = router;