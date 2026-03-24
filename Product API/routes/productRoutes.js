const express = require('express');
const router = express.Router();

let products = [
    { id: 1, name: "Shoes", price: 1000 },
    { id: 2, name: "Watch", price: 2000 }
];



router.get('/', (req, res) => {
    res.json(products);
});



router.post('/', (req, res) => {
    const { id, name, price } = req.body;

    if (!id || !name || !price) {
        return res.status(400).json({ message: "All fields required" });
    }

    const newProduct = { id, name, price };
    products.push(newProduct);

    res.json({ message: "Product added", product: newProduct });
});



router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    if (name) product.name = name;
    if (price) product.price = price;

    res.json({ message: "Product updated", product });
});


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const exists = products.find(p => p.id === id);

    if (!exists) {
        return res.status(404).json({ message: "Product not found" });
    }

    products = products.filter(p => p.id !== id);

    res.json({ message: "Product deleted" });
});

module.exports = router;