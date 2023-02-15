const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, resp = response, next) => {
    
    const errores = validationResult( req ); // contienelos errores que pasaron por el midelware

    if( !errores.isEmpty() ) {
        return resp.status(400).json({
            ok: false,
            testx: "probando validar campos",
            errors: errores.mapped()
        });
    }
    next();
}

module.exports = {
    validarCampos
 }