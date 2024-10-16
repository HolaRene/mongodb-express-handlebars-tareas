import { Schema, model } from "mongoose";

const tareaEsquema = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,//limpiar 
        unique: true, //Esto garantiza que los títulos son únicos
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    estaEcho: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,//colocar la fech
    versionKey: false, //evitar que mongoose agregue un campo llamado _v
})

export default model('Tarea', tareaEsquema)