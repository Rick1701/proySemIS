const express = require('express'); //constante de nombre express que importará la librería express
const mongoose = require('mongoose'); //constante de nombre mongoose que importará la librería mongobd
const cors = require('cors'); //constante de nombre cors que importará la librería de seguridad cors
require('dotenv').config();


const app = express();

//RUTAS DEFINIDA
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes')

//PARA UTILIZAR LA RUTA INGRESO:
app.use(cors());
app.use(express.json());
app.options('*', cors());

//REINGRESO /api Y LAS RUTAS QUE SE GENERAN
app.use('/api', productRoutes)
app.use('/api', categoryRoutes)


//app.listen(3000, () => console.log('Server started'));
/*app.listen(3000, () => {
    for(let i=0; i<10; i++)
    {
        console.log("El valor de i es: ",i)
    }
})*/

app.listen(process.env.PORT, () => {
    console.log('El proyecto esta corriendo en el puerto => ', process.env.PORT)
});

//SETEO DE PARAMETROS PARA EVITAR CONFLICTOS CON MONGOOSE:
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB, (err)=> {
    if(err)
    {
        return console.log('Error al conectar con la base de datos => ', err)
    }
    return console.log('Conectado a la base de datos')
})