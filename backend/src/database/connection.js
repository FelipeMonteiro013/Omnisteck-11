// importando pacotes
const knex = require('knex');
const configuration = require('../../knexfile');

// criando conexão
const connection = knex(configuration.development);

// exportando a conexão
module.exports = connection;