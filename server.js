const express = require('express');
const routes = require("./routes/htmlroutes")
const apiRoutes = require('./routes/apiroutes')


const app = express();
const PORT = process.env.PORT || 3001;

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

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);