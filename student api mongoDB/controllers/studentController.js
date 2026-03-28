const Student = require("../models/studentModel");

// Add student
exports.addStudent = async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
};

// Get all students
exports.getStudents = async (req, res) => {
    const students = await Student.find();
    res.json(students);
};

// Update marks
exports.updateMarks = async (req, res) => {
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        { marks: req.body.marks },
        { new: true }
    );

    res.json(student);
};

// Delete student
exports.deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
};