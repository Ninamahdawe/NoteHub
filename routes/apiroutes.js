const router = require("express").Router()
const { v4: uuidv4 } = require('uuid')
const fs = require("fs");
const { text, json } = require("express");

router.get('/notes', (req, res) => {
    const saveNotes = fs.readFileSync("./db/db.json")
    res.json(JSON.parse(saveNotes));
});
router.post('/notes', (req, res) => {
    console.log(req.body);
    const saveNotes = JSON.parse(fs.readFileSync("./db/db.json"))
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    saveNotes.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(saveNotes))
    res.json({ Message: "NotesSaved" })


})
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

        res.json({ Message: "Note deleted" });
    } else {
        res.status(404).json({ Message: "Note not found" });
    }
});
// app.get('/api/db', (req, res) => res.json(dbjson));









module.exports = router;