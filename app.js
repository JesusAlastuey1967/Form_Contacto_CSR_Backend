require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const dbConnect = require('./db/db')
const Contacto = require('./models/contactos')
const contactoruta = require('./routes/contactos')
const app = express()

dbConnect()

app.use(cors())

//(Conectar mi App a los archivos Frontend)
app.use(express.static(path.join(__dirname,'public')))

//(para ejecutar nuestras peticiones de tipo json y te lo deja en la propiedad req.body)

app.use(express.json())

//(le Pasamos la peticion a nuestro Backend), (Enviamos y grabamos el nuevo producto en mongoose)

app.use('/api/v1/contactos', contactoruta)
// app.use('/api/v1/usuarios', usuarioruta)

//(Para escuchar por Consola)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

const mostrar = (data) => {console.log(data)}