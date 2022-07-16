const mongoose = require('mongoose')

const dbConnect = () => {
mongoose.connect(`mongodb+srv://jalastuey:${process.env.MONGO_DB_PASS}@desarrollo.gtcrl.mongodb.net/Contactos?retryWrites=true&w=majority`)
.then((result) => console.log("Conexión Exitosa a la BBDD"))
.catch((err) => console.log(error))
}

module.exports = (dbConnect)
