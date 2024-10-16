import { Router } from "express";

import { renderIndex, guardarTarea, editarTarea, renderTarea, estado, borrarTarea } from "../controllers/tareas.controllers";

const rutas = Router();
rutas.get("/", renderIndex)
rutas.get("/about", (req, res) => {
    res.render('about')
})
//aniadir las tareas
rutas.post("/tareas/nueva", guardarTarea)

//obtener la tarea para editar
rutas.get("/tarea/:id/editar", renderTarea)

//enviarlos datos del formulario
rutas.post("/tarea/:id/editar", editarTarea)

rutas.get('/tarea/:id/eliminar', borrarTarea)

rutas.get('/tarea/:id/hecho', estado)

export default rutas