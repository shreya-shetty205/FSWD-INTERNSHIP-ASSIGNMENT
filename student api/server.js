const express = require("express");

const app = express();
const PORT = 3000;


app.get("/students", (req, res) => {
    const students = [
        { name: "Amit", course: "AI" },
        { name: "Riya", course: "FullStack" },
        { name: "Rahul", course: "DataScience" }
    ];
    res.json(students);
});


app.get("/courses", (req, res) => {
    const courses = ["AI", "ML", "FullStack", "DataScience"];
    res.json(courses);
});


app.get("/", (req, res) => {
    res.send(`<h1>Welcome to My Website</h1>
    <p>Date: ${new Date()}</p>`);
});


app.get("/about", (req, res) => {
    res.send(`<h1>About Us</h1>
    <p>This is about page</p>
    <p>Date: ${new Date()}</p>`);
});


app.get("/services", (req, res) => {
    res.send(`<h1>Our Services</h1>
    <p>Web Development, AI, Data Science</p>
    <p>Date: ${new Date()}</p>`);
});


app.get("/contact", (req, res) => {
    res.send(`<h1>Contact Us</h1>
    <p>Email: contact@example.com</p>
    <p>Date: ${new Date()}</p>`);
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});