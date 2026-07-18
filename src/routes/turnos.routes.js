const express = require("express");
const router = express.Router();
const { getTurnos, createTurnos, deleteTurnos } = require("../controllers/turnos.controllers");

router.get("/", getTurnos);
router.post("/", createTurnos);
router.delete("/:id", deleteTurnos);

module.exports = router;