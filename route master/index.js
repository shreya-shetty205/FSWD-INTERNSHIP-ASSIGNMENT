const express = require('express');
const app = express();

app.use(express.json());

// Dummy Data
let books = [
    { id: 1, name: "Book One" },
    { id: 2, name: "Book Two" }
];

let authors = [
    { id: 1, name: "Author One" },
    { id: 2, name: "Author Two" }
];

// Home Route
app.get('/', (req, res) => {
    res.send('Bookstore API Running');
});


// BOOK ROUTES

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Add book
app.post('/books', (req, res) => {
    const book = {
        id: books.length + 1,
        name: req.body.name
    };
    books.push(book);
    res.json(book);
});

// Update book
app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (book) {
        book.name = req.body.name;
        res.json(book);
    } else {
        res.send("Book not found");
    }
});

// Delete book
app.delete('/books/:id', (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.send("Book deleted");
});


// AUTHOR ROUTES

// Get all authors
app.get('/authors', (req, res) => {
    res.json(authors);
});

// Add author
app.post('/authors', (req, res) => {
    const author = {
        id: authors.length + 1,
        name: req.body.name
    };
    authors.push(author);
    res.json(author);
});

// Update author
app.put('/authors/:id', (req, res) => {
    const author = authors.find(a => a.id == req.params.id);
    if (author) {
        author.name = req.body.name;
        res.json(author);
    } else {
        res.send("Author not found");
    }
});

// Delete author
app.delete('/authors/:id', (req, res) => {
    authors = authors.filter(a => a.id != req.params.id);
    res.send("Author deleted");
});


// Server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});