import express from 'express'; //importar express
//const express = require('express');
import path from 'path'; //importar path
//const path = require('path')

export const startServer = (options) => {
    const {port, public_path='public'}=options;
    console.log(port, public_path);

    const app=express();

    //Para poder usar un middleware se usa la palabra use (express)
    app.use(express.static(public_path))

    app.get('*', (req, res)=>{
        res.send('Hola Mundo');
        const indexPath=path.join(__dirname + `../../../${public_path}/index.html`);
        res.sendFile(indexPath)
    })

    app.listen(port, ()=>{
        console.log(`Escuchando en el puerto ${port}`);
    })
}
/* module.exports = {
    startServer
} */