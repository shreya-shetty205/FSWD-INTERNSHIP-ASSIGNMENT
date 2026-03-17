const express = require('express');
const app = express();

app.use(express.json());

// Logger Middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// Student Data
let students = [
    { id: 1, name: "Arjun", course: "AI" },
    { id: 2, name: "Priya", course: "Web" }
];


// GET all students
app.get('/students', (req, res) => {
    res.json(students);
});


// GET student by ID
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Not found" });
    }

    res.json(student);
});


//ADD student using browser (NO Postman needed)
app.get('/add', (req, res) => {
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
});



app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});