const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome to Product API 🚀");
});

app.use('/products', productRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});