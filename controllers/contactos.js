const Contacto = require('../models/contactos')

const getContactos =  async (req, res) => {
    const contactos = await Contacto.find()
    res.status(200).json(contactos)
    }
    

const postContactos = async (req, res) => {
    const newContacto = new Contacto (req.body)
    newContacto.save()
    .then ((result) => {res.status(201).json({ok: true})})
    .catch((err) => console.log(err))
    }

module.exports = {getContactos, postContactos}




