// importando pacotes
const crypto = require('crypto');

// importando a conexão
const connection = require('../database/connection');

module.exports = {
    // Método de listagem de ongs
    async index(request,response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
        
    },

    // Método de cadastro de ongs
    async create(request, response){
        // desestruturação para pegar cada um dos dados
    const {name,email,whatsapp,city,uf} = request.body;

    // gerando id aleatório
    const id = crypto.randomBytes(4).toString('HEX');

    // Criando insert no banco
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    return response.json({id});
    }
}