/*
    Ruta: /api/uusarios
*/

const { Router } = require('express');
const { getUsuarios, crearUsuario } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);
router.post('/', crearUsuario);

// router.get('/', (req, resp) => {
//     //resp.json({
//     resp.status(400).json({
//         ok: true,
//         msg: 'Hola mundo'
//     });
// });


module.exports = router;