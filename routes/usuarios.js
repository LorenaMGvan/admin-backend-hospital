/*
    Ruta: /api/uusarios
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', validarJWT, getUsuarios);

// vamos a colocar  un arreglo de midlewares
// con el modulo d excheck, se hace valiadciones de los campos de la BD
// el resultado de la validacion se hace ene le controllers
router.post('/',
            [
                check('nombre', 'el nombre es obligatorio').not().isEmpty(),
                check('password', 'el password es obligatorio').not().isEmpty(),
                check('email', 'el email es obligatorio').isEmail (),
                validarCampos,
            ],
            crearUsuario);

// router.get('/', (req, resp) => {
//     //resp.json({
//     resp.status(400).json({
//         ok: true,
//         msg: 'Hola mundo'
//     });
// });

router.put('/:id',
        [
            validarJWT, 
            check('nombre', 'el nombre es obligatorio').not().isEmpty(),
            check('email', 'el email es obligatorio').isEmail(),
            check('role', 'el ROLE es obligatorio').not().isEmpty(),
            validarCampos,
        ],
        actualizarUsuario );


router.delete('/:id',
        validarJWT,
        borrarUsuario );

module.exports = router;