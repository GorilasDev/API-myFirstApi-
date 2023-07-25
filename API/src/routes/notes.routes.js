const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRouters = Router();

const notesController = new NotesController();



notesRouters.get("/", notesController.index);
notesRouters.post("/:user_id", notesController.create);
notesRouters.get("/:id", notesController.show);
notesRouters.delete("/:id", notesController.delete);


module.exports = notesRouters;