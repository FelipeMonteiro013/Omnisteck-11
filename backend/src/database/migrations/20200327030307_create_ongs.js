// up sempre responsavel pela criação da tabela
exports.up = function(knex) {

// criando tabela no banco de dados (SQLite)
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();
  });
};

// "Ctrl + z" na tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
