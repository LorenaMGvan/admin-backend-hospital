const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios');

const router = Router();

// vamos a colocar  un arreglo de midlewares
// con el modulo d excheck, se hace valiadciones de los campos de la BD
// el resultado de la validacion se hace ene le controllers
router.post('/',crearUsuario);

// router.get('/', (req, resp) => {
//     //resp.json({
//     resp.status(400).json({
//         ok: true,
//         msg: 'Hola mundo'
//     });
// });


module.exports = router;