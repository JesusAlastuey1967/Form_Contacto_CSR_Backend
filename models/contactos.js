const mongoose = require('mongoose')

const contactoSchema = mongoose.Schema ({nombre: String, correo: String, telefono: String, comentarios: String},{timestamps:true})
const Contacto = mongoose.model('Contacto', contactoSchema, 'Antiguos')

module.exports = Contacto