const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 8080;
const {obtenerProductos,obtenerProductosRandom}  = require('./controllers/index');

app.get('/productos',async (req,res)=>{
     res.send(await obtenerProductos());
})

app.get('/productoRandom',async (req,res)=>{
    res.send(await obtenerProductosRandom());
})

const server = app.listen(PORT,() => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})

server.on("error", error => console.log(`Este es el error ${error}`));