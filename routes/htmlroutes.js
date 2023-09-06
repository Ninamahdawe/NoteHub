const router = require("express").Router()
const path = require("path")


// Define a route to handle GET requests for the root URL ('/')
router.get('/', (req, res) => {
    res.sendFile((path.join(__dirname, '../public/index.html')))

});
// Define a route to handle GET requests for the '/notes' URL

router.get('/notes', (req, res) => {
    // Send the 'notes.html' file as a response, using the path module to construct the file path
    res.sendFile((path.join(__dirname, '../public/notes.html')))

});



// Export the router for use in other parts of the application
module.exports = router;