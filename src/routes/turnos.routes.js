const express = require("express");
const router = express.Router();
const { getTurnos, createTurnos, deleteTurnos, devolverEspecialidad} = require("../controllers/turnos.controllers");

router.get("/", getTurnos);
router.post("/", createTurnos);
router.delete("/:id", deleteTurnos);
router.get("/esp", devolverEspecialidad);


module.exports = router;