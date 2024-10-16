import app from './app'
import { PORT } from './config';

//falta la parte de produccion


app.listen(PORT);
console.log(`listening on ${PORT}`);