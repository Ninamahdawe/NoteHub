// Import the necessary modules
const router = require("express").Router()
const { v4: uuidv4 } = require('uuid')
const fs = require("fs");
const { text, json } = require("express");

// Define a route for handling GET requests to '/notes'
router.get('/notes', (req, res) => {
    // Read the contents of the 'db.json' file synchronously
    const saveNotes = fs.readFileSync("./db/db.json")
    res.json(JSON.parse(saveNotes));
});

// Define a route for handling POST requests to '/notes'
router.post('/notes', (req, res) => {
    console.log(req.body);
    const saveNotes = JSON.parse(fs.readFileSync("./db/db.json"))
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    // Push the new note into the existing notes array
    saveNotes.push(newNote)
    // Write the updated notes array back to the 'db.json' file
    fs.writeFileSync("./db/db.json", JSON.stringify(saveNotes))
    res.json({ Message: "NotesSaved" })


})
// Define a route for handling DELETE requests to '/notes/:id'
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    let saveNotes = JSON.parse(fs.readFileSync("./db/db.json"));

    // Find the index of the note with the specified ID
    const noteIndex = saveNotes.findIndex(note => note.id === noteId);

    if (noteIndex !== -1) {
        // Remove the note from the array
        saveNotes.splice(noteIndex, 1);

        // Save the updated notes array back to the file
        fs.writeFileSync("./db/db.json", JSON.stringify(saveNotes));

        // Send a response indicating that the note has been deleted
        res.json({ Message: "Note deleted" });
    } else {
        // If the note with the specified ID is not found, send a 404 error response
        res.status(404).json({ Message: "Note not found" });
    }
});
// app.get('/api/db', (req, res) => res.json(dbjson));









module.exports = router;