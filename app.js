const express = require('express');
const app = express();
app.use(express.json());
const errorHandler = require('./middleware/errorHandler');
const {auth} = require('express-oauth2-jwt-bearer');

const port = process.env.PORT || 3000;

const jwtCheck = auth({
    audience: 'http://api.biblioteca/productos',
    issuerBaseURL: 'https://dev-atqmyju1ewfjntqq.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

  app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

//ROUTER
const librosRouter = require('./routes/libros');
app.use('/libros', jwtCheck, librosRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor iniciado en puerto ${port}.`);
});

