const express = require("express");
const router = express.Router();

const {
    addStudent,
    getStudents,
    updateMarks,
    deleteStudent
} = require("../controllers/studentController");

router.post("/add", addStudent);
router.get("/", getStudents);
router.put("/update/:id", updateMarks);
router.delete("/delete/:id", deleteStudent);

module.exports = router;