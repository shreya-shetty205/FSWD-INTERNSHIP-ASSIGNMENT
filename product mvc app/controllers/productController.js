const products = require("../models/productModel");

exports.getAllProducts = (req, res) => {
    res.json(products);
};

exports.getProductById = (req, res, next) => {
    const product = products.find(p => p.id == req.params.id);

    if (!product) {
        return next({ message: "Product not found" });
    }

    res.json(product);
};

exports.addProduct = (req, res, next) => {
    const { id, name, price, category } = req.body;

    if (!id || !name || !price || !category) {
        return next({ message: "All fields required" });
    }

    products.push({ id, name, price, category });

    res.json({ message: "Product added successfully" });
};