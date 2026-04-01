const express = require('express');
const app = express();

app.use(express.json());

// Dummy Task Data
let tasks = [
    { id: 1, title: "Learn Node", status: "pending" },
    { id: 2, title: "Build API", status: "completed" }
];

// Home Route
app.get('/', (req, res) => {
    res.send("Task API Running");
});

// Test Route
app.get('/hello', (req, res) => {
    res.send("Hello working");
});

// ✅ GET all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// ✅ GET single task
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) {
        res.json(task);
    } else {
        res.send("Task not found");
    }
});

// ✅ CREATE task (POST)
app.post('/tasks', (req, res) => {
    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        status: req.body.status || "pending"
    };
    tasks.push(task);
    res.json(task);
});

// ✅ UPDATE task (PUT)
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) {
        task.title = req.body.title;
        task.status = req.body.status;
        res.json(task);
    } else {
        res.send("Task not found");
    }
});

// ✅ DELETE task
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.send("Task deleted");
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});