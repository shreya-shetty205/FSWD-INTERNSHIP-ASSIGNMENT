const express = require('express');
const app = express();

function createPage(title, content) {
    return `
    <html>
    <head>
        <title>${title}</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background: linear-gradient(to right, #a7d13a, #00f2fe);
                color: white;
                text-align: center;
                padding: 80px;
            }
            .card {
                background: rgba(255,255,255,0.15);
                padding: 40px;
                border-radius: 15px;
                box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                display: inline-block;
            }
            h1 {
                font-size: 40px;
                margin-bottom: 20px;
            }
            p {
                font-size: 18px;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>${title}</h1>
            <p>${content}</p>
        </div>
    </body>
    </html>
    `;
}

app.get('/', (req, res) => {
    res.send(createPage("🏠 Welcome", "Welcome to Hello Server 🚀"));
});

app.get('/about', (req, res) => {
    res.send(createPage("📘 About", "This server is built using Node.js & Express"));
});

app.get('/contact', (req, res) => {
    res.send(createPage("📞 Contact", "Email: hello@gmail.com"));
});


app.use((req, res) => {
    res.status(404).send(createPage("❌ Error", "Page Not Found"));
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✨ Server running at http://localhost:${PORT}`);
});