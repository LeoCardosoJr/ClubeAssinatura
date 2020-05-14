const express = require('express');
const router = express.Router();

const UsuarioControlller = require('../controllers/usuario.controller');

router.get('/usuarios', UsuarioControlller.findAll);
router.get('/usuarios/:id', UsuarioControlller.findOne);

module.exports = router
