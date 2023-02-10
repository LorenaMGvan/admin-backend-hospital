const express = require('express');
require('dotenv').config(); // lee las variables de entorno
const cors = require('cors');


const { dbConnection } = require('./database/config');

// creando servidor de express
const app = express();

// configurar cors
// el use es un middlerwRE, QUE SE EJECUTA  SIEMPRE PARA TODAS LAS LIENAS DE ABAJO OSEA POR EL DB CONECCITION
app.use(cors());


// base de datos:
dbConnection();

// leer las varianles de entorno probarrr
console.log( process.env);

app.get('/', (req, resp) => {
    //resp.json({
    resp.status(400).json({
        ok: true,
        msg: 'Hola mundo'
    });

});


app.listen(process.env.PORT, () => {
    console.log('servidor 3000');
});