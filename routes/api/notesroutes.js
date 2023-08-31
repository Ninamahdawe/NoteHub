const router = require("express").Router()
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const notesDataPath = path.join(__dirname, '../db/db.json');

router.get('/', (req, res) => {
    // Read and send the notes data from the JSON file
    const notesData = fs.readFileSync(notesDataPath, 'utf-8');
    const notes = JSON.parse(notesData);
    res.json(notes);
});

module.exports = router;