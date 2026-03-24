const fs = require('fs');
const path = require('path');

const getFiles = (req, res) => {
    const folderPath = path.join(__dirname, '../data');

    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Unable to read folder" });
        }

        let results = [];

        files.forEach(file => {
            const filePath = path.join(folderPath, file);

            const data = fs.readFileSync(filePath, 'utf8');

            results.push({
                fileName: file,
                content: data
            });
        });

        res.json(results);
    });
};

module.exports = { getFiles };