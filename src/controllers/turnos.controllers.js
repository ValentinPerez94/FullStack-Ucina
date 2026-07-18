let turnos = [
    {id: 1, paciente: "juan perez", dni: "126313", especialidad: "cardiologia"},
    {id: 2, paciente: "martin aguirre", dni: "4342342", especialidad: "cardiologia"},
    {id: 3, paciente: "marcos lopes", dni: "12332312", especialidad: "cardiologia"},
    {id: 4, paciente: "susana gimenez", dni: "45645646", especialidad: "cardiologia"}
]

const respuestaEstandar = (res, status, success, message, data = null) => {
    return res.status(status).json({
        success,
        timestamp: new Date().toISOString(),
        message,
        total: Array.isArray(data) ? data.length : data ? 1 : 0,
        data
    })
}




const getTurnos = (req, res) => {
   respuestaEstandar(res, 200, true, "Turnos obtenidos exitosamente", turnos);
};



const createTurnos = (req, res) => {
    const {paciente, dni, especialidad} = req.body;

    if ( !paciente || !dni || !especialidad ) {
        return respuestaEstandar(res, 400, false, "Faltan datos requeridos"); 
    };

    const nuevoTurno = {
        id: turnos.length + 1,
        paciente,
        dni,
        especialidad
    };

    turnos.push(nuevoTurno);
    respuestaEstandar(res, 201, true, "Turno creado exitosamente", nuevoTurno);
};



const deleteTurnos = (req, res) => {
    const { id } = req.params;
    const turnoExiste = turnos.some(t => t.id === parseInt(id));

    if (!turnoExiste) {
        return respuestaEstandar(res, 404, false,"Turno no econtrado");
    };

    turnos = turnos.filter(t => t.id !== parseInt(id));
    respuestaEstandar(res, 200, true, "Turno eliminado exitosamente", turnos)
};




const devolverEspecialidad = (req, res) => {
    const listaEspecialidades = turnos.map(objeto => objeto.especialidad);
  
    res.json(listaEspecialidades);
}

module.exports = {getTurnos, createTurnos, deleteTurnos, devolverEspecialidad}; 