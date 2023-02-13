const { Schema, model } = require('mongoose');


//creamos el esquema es la definicion del esquema
const UsuariosSchema = Schema({
    nombre: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String,
        required: false,
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: false,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        required: false
    },
});
// esta parte es par la parte visual de lo que regresa la BD
UsuariosSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id; // ahora aparecera el campo uid con el valor id en la bd esto "lor etorna"
    return object; 
});

module.exports = model( 'Usuario', UsuariosSchema );
// Mongo coloca  en plural "usuarios"