const router = require("express").Router()
const { v4: uuidv4 } = require('uuid')
const fs = require("fs");
const { text } = require("express");

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

// app.get('/api/db', (req, res) => res.json(dbjson));









module.exports = router;