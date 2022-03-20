const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 8080;

app.get('/',(req,res)=>{
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})

const server = app.listen(PORT,() => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})

server.on('error',()=> console.log(`Este es el error ${error}`));