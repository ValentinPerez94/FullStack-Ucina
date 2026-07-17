
const auditoriaMunicipal = (req, res, next) => {
    const horaActual = new Date().toLocaleDateString();
    const metodo = req.method;
    const ruta = req.originalurl;

    console.log(` [${horaActual}] ${metodo} ${ruta} `) 

    next();
}

module.exports = auditoriaMunicipal;