const express = require('express');
const app = express();
app.use(express.json());

//ROUTER
const librosRouter = require('./routes/libros');
app.use('/libros', librosRouter);

app.listen(3000, () => {
    console.log('Servidor iniciado en puerto 3000.');
});

