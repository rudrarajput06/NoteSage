const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/notesdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Note Schema
const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    fileUrl: String,
    uploader: String,
    tags: [String]
});

const Note = mongoose.model('Note', noteSchema);

// Middleware for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Upload Notes
app.post('/upload', upload.single('noteFile'), (req, res) => {
    const newNote = new Note({
        title: req.body.title,
        content: req.body.content,
        fileUrl: req.file.path,
        uploader: req.body.uploader,
        tags: req.body.tags.split(',')
    });
    newNote.save()
        .then(() => res.send('Note uploaded successfully'))
        .catch(err => res.status(400).send('Error uploading note'));
});

// Get All Notes
app.get('/notes', (req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).send('Error fetching notes'));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
