const router = require("express").Router()
const noteRoutes = require("./notesroutes")

router.use("/notes", noteRoutes)

module.exports = router;