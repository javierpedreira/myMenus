'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecipesSchema extends Schema {
  up() {
    this.create('recipes', (table) => {
      table.increments()
      table.string('name', 255).notNullable().index()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down() {
    this.drop('recipes')
  }
}

module.exports = RecipesSchema
