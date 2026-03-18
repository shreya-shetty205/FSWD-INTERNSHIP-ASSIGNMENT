const students = require('../data/students');

// GET all
const getAllStudents = (req, res) => {
    res.json(students);
};

// GET by id
const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Not found" });
    }

    res.json(student);
};

// ADD student 
const addStudent = (req, res) => {
    const { id, name, course } = req.query;

    if (!id || !name || !course) {
        return res.json({ message: "Please provide id, name, course" });
    }

    const newStudent = {
        id: Number(id),
        name,
        course
    };

    students.push(newStudent);

    res.json({
        message: "Student added",
        student: newStudent
    });
};

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent
};