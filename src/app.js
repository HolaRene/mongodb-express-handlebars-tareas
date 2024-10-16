import express from 'express';
import conexionDB from './database';
import rutas from './routes/index.routes';
//version 6+
import { create } from 'express-handlebars';
import camino from 'path';
import morgan from 'morgan';

conexionDB()
const app = express();

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.set('views', camino.join(__dirname, 'views'));

// Configuración de la plantilla
app.engine(
    '.hbs',
    create({
        layoutsDir: camino.join(app.get('views'), 'layouts'),//direccion de la carpeta
        defaultLayout: 'main', // nombre del archivo
        extname: '.hbs', // extensión
    }).engine // Aquí se usa el motor creado
);


// Establecer el motor de plantilla
app.set('view engine', '.hbs');

// Rutas
app.use(rutas);

//static archivos
app.use(express.static(camino.join(__dirname, 'public')))

export default app;
