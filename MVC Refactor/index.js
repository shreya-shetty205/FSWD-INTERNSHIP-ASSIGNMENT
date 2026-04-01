const express = require('express');
const app = express();

const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());

// Home
app.get('/', (req, res) => {
    res.send("MVC Task API Running");
});

// Use routes
app.use('/', taskRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});