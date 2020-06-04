import Knex from 'knex';

// Criar table
export async function up(knex: Knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

// Voltar (playback) -> deletar table
export async function down(knex: Knex) {
  return knex.schema.dropTable('items');
}