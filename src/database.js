import { connect } from "mongoose";
import { MONGODB } from './config.js';
// Connect to MongoDB

const conexionDB = (async () => {
    try {
        const db = await connect(MONGODB)
        console.log('Se ha conectado a', db.connection.name)
    } catch (error) {
        console.log('Ha ocurrido un error con la conexion de la base de datos', error)
    }
})

export default conexionDB