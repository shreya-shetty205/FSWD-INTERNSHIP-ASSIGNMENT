const express = require('express');
const app = express();

const fileRoutes = require('./routes/fileRoutes');

app.use(express.json());


app.use('/', fileRoutes);

app.get('/', (req, res) => {
    res.send("Server is running 🚀");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});