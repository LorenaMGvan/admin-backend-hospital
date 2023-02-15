const express = require('express');
require('dotenv').config(); // lee las variables de entorno
const cors = require('cors');


const { dbConnection } = require('./database/config');

// creando servidor de express
const app = express();
// configurar cors
// el use es un middlerwRE, QUE SE EJECUTA  SIEMPRE PARA TODAS LAS LIENAS DE ABAJO OSEA POR EL DB CONECCITION
app.use( cors() );

// lectura y parseo del body
app.use( express.json() );
// PROBANDO SI FUNCIONA
app.use(express.urlencoded({ extended: true }))

// base de datos:
dbConnection();

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/usuarios/add', require('./routes/usuarios'));

app.listen(process.env.PORT, () => {
    console.log('servidor 3000');
});