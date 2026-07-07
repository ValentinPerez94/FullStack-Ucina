const express = require("express");
const app = express();
const PORT = 3000; 

app.use(express.json());

let turnos = [
    {id: 1, paciente: "juan perez", dni: "126313", especialidad: "cardiologia"},
    {id: 2, paciente: "martin aguirre", dni: "4342342", especialidad: "cardiologia"},
    {id: 3, paciente: "marcos lopes", dni: "12332312", especialidad: "cardiologia"},
    {id: 4, paciente: "susana gimenez", dni: "45645646", especialidad: "cardiologia"}
]

app.get("/api/v1/turnos", (req, res) => {
    res.json({total: turnos.length, data: turnos });
});


app.post("/api/v1/turnos", (req, res) => {
    const {paciente, dni, especialidad} = req.body;

    if ( !paciente || !dni || !especialidad ) {
        return res.status(400).json({ error : "faltan datos requeridos" })
    };

    const nuevoTurno = {
        id: turnos.length + 1,
        paciente,
        dni,
        especialidad
    };

    turnos.push(nuevoTurno);
    res.status(201).json({ message: "Turno creado Exitosamente", turno: nuevoTurno});

});


app.delete("/api/v1/turnos/:id", (req, res) => {
    const { id } = req.params;
    const turnoExiste = turnos.some(t => t.id === parseInt(id));

    if (!turnoExiste) {
        return res.status(404).json({error : "turno no encontrado"});
    };

    turnos = turnos.filter(t => t.id !== parseInt(id));
    res.status(200).json({message: "Turno eliminado exitosamente", data: turnos})
})





app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
})