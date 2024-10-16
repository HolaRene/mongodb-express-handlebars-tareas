import Tareas from "../models/Tareas";

export const renderIndex = async (req, res) => {
    const tareas = await Tareas.find().lean()

    res.render('index', { matrizTareas: tareas })
}
export const guardarTarea = async (req, res) => {
    try {
        const tarea = Tareas(req.body)
        await tarea.save()

        res.redirect('/')
        // console.log(tareSaved)
    } catch (error) {
        console.log('Error saving', error)
    }
}

export const renderTarea = async (req, res) => {
    try {
        const tareas = await Tareas.findById(req.params.id).lean()
        // console.log(tareas)
        res.render('edit', { tareas })
    } catch (error) {
        console.log('Error finding', error)
    }
}

export const editarTarea = async (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    const { id } = req.params

    await Tareas.findByIdAndUpdate(id, req.body)
    res.redirect('/')
}

export const estado = async (req, res) => {
    const { id } = req.params
    const tarea = await Tareas.findById(id)

    tarea.estaEcho = !tarea.estaEcho
    await tarea.save()
    console.log(tarea)


    res.redirect('/')
}

export const borrarTarea = async (req, res) => {
    try {
        await Tareas.findByIdAndDelete(req.params.id)
        res.redirect('/')
    } catch (error) {
        console.log('Error finding', error)
    }
}