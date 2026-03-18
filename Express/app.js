const express = require('express');
const app = express();

const studentRoutes = require('./routes/studentRoutes');
const logger = require('./middleware/logger'); // import logger

// middleware
app.use(express.json());
app.use(logger); 

// routes
app.use('/', studentRoutes);

// home route (optional but good)
app.get('/', (req, res) => {
    res.send("Student API is running 🚀");
});

// server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});