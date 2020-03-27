// arquivo de armazenamento de rotas

// importando pacotes
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Login
routes.post('/sessions',SessionController.create);

// Chama a rota de Listagem de ongs
routes.get('/ongs', OngController.index);

// Chama a rota de cadastro de ongs
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);


// exportando 
module.exports = routes;