const router = require('express').Router()
const contactoController = require('../controllers/contactos')

router.post('/', contactoController.postContactos)

router.get('/', contactoController.getContactos)

module.exports = router

