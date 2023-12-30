const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Create a new Markdown file
app.post('/markdown', (req, res) => {
    const { filename, content } = req.body;
    fs.writeFile(path.join(__dirname, 'db', `${filename}.md`), content, err => {
        if (err) {
            res.status(500).send({ message: 'Error writing file' });
        } else {
            res.status(200).send({ message: 'File created successfully' });
        }
    });
});

// Read a Markdown file
app.get('/markdown/:filename', (req, res) => {
    const { filename } = req.params;
    fs.readFile(path.join(__dirname, 'db', `${filename}.md`), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ message: 'Error reading file' });
        } else {
            res.status(200).send({ content: data });
        }
    });
});

// Update a Markdown file
app.put('/markdown/:filename', (req, res) => {
    const { filename } = req.params;
    const { content } = req.body;
    fs.writeFile(path.join(__dirname, 'db', `${filename}.md`), content, err => {
        if (err) {
            res.status(500).send({ message: 'Error updating file' });
        } else {
            res.status(200).send({ message: 'File updated successfully' });
        }
    });
});

// Delete a Markdown file
app.delete('/markdown/:filename', (req, res) => {
    const { filename } = req.params;
    fs.unlink(path.join(__dirname, 'db', `${filename}.md`), err => {
        if (err) {
            res.status(500).send({ message: 'Error deleting file' });
        } else {
            res.status(200).send({ message: 'File deleted successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});