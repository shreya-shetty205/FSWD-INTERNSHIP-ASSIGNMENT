let tasks = require('../models/taskModel');

// GET all
exports.getTasks = (req, res) => {
    res.json(tasks);
};

// GET by ID
exports.getTaskById = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) res.json(task);
    else res.send("Task not found");
};

// CREATE
exports.createTask = (req, res) => {
    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        status: req.body.status || "pending"
    };
    tasks.push(task);
    res.json(task);
};

// UPDATE
exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) {
        task.title = req.body.title;
        task.status = req.body.status;
        res.json(task);
    } else {
        res.send("Task not found");
    }
};

// DELETE
exports.deleteTask = (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.send("Task deleted");
};