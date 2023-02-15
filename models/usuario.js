const { Schema, model } = require('mongoose');


//creamos el esquema es la definicion del esquema
const UsuariosSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
        defaut: 'elemail@test.mx'
        // unique: true 
    },
    password: {
        type: String,
        required: false,
        default: 'elpass'
    },
    img: {
        type: String,
        default: 'laimg'
    },
    role: {
        type: String,
        required: false,
        default: 'USER_ROLE'
    },
    google: {
        type: String,
        required: false,
        default: "unoooo"
    },
});
// esta parte es par la parte visual de lo que regresa la BD
UsuariosSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    // la contraseña  y el ___v no lo mandamos  cuando hacemos querys de la BD, en elpostman
    object.uid = _id; // ahora aparecera el campo uid con el valor id en la bd esto "lor etorna"
    return object; 
});

module.exports = model( 'Usuario', UsuariosSchema );
// Mongo coloca  en plural "usuarios"