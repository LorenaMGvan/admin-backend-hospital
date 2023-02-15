
const { response } = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt')

const login = async( req, res = response) => {

    const { email, password } = req.body;

    try {
        // verificar email
        const usuarioDB = await Usuario.findOne({email});

        // if ( !usuarioDB ) {
        //     return res.status(404).json({
        //         ok: false,
        //         msg: 'Email no encontrado'
        //     });
        // }

        // // verificar contraseña
        // const validaPassword =  bcrypt.compareSync( password , usuarioDB.password); 
        
        // if ( !validaPassword ) {
        //     return res.status( 404 ).json({
        //         ok: false,
        //         msg:  'contraseña novalida'
        //     });
        // }

        // // Generar el jwT token, aqui lo firmamos
        // const token = await generarJWT( usuarioDB.id );

        res.json({
            ok: true,
            token: 'token',
            msg: 'soy el token auth..'
        });
        
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    login
}