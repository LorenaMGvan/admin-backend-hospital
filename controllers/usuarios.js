const Usuario = require('../models/usuario');

const getUsuarios = async(req, resp) => {
    //resp.json({
        // const usuarios = await Usuario.find();
        // para especificar un filtro:
         const usuarios = await Usuario.find({}, 'nombre email role google');
    
    resp.json({
        ok: true,usuarios
    });
}

const crearUsuario = async (req, resp) => {

    const { email, password, nombre } = req.body;

    const usuario = new Usuario( req.body );
   
    await usuario.save(); // lo guarda en la BD esto es una promesa

    //resp.json({
    resp.json({
        ok: true,
        usuario
    });
}

module.exports = {
    getUsuarios,
    crearUsuario
}