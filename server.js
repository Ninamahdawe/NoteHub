const express = require('express');
// Import custom route modules
const routes = require("./routes/htmlroutes")
const apiRoutes = require('./routes/apiroutes')

// Create an Express application
const app = express();

// Define the port number for the server, using the environment variable PORT or default to 3001
const PORT = process.env.PORT || 3001;

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(routes)
app.use("/api", apiRoutes)

// app.get('/', (req, res) =>
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// );
// app.get('/', (req, res) =>
//     res.sendFile(path.join(__dirname, "/public/notes.html"))
// );
// Start the server and listen on the specified port
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);