const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 8080;
const {obtenerProductos,obtenerProductosRandom}  = require('./controllers/index');

app.get('/productos',(req,res)=>{
    res.send(obtenerProductos());
})

app.get('/productoRandom',(req,res)=>{
    res.send(obtenerProductosRandom());
})

const server = app.listen(PORT,() => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})

server.on("error", error => console.log(`Este es el error ${error}`));