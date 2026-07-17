const express = require("express");
const router = express.Router();
const { getTunros, createTurnos, deleteTurnos } = require("../controllers/turnos.controllers");

router.get("/", getTunros);
router.post("/", createTurnos);
router.delete("/:id", deleteTurnos);

