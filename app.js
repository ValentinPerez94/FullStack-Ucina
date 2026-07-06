const express = require("express");
const app = express();
const PORT = 3000; 

app.get( "/", (req, res) => {
    res.send("ventanillaaa de salita abierta");
});

app.get( "/informacion", (req, res) => {
    res.send("aca se ve la informacion");
});


app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
})