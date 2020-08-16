'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IngredientsSchema extends Schema {
  up() {
    this.create('ingredients', (table) => {
      table.increments()
      table.string('name', 255).notNullable().index()
      table.string('unit', 255).notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down() {
    this.drop('ingredients')
  }
}

module.exports = IngredientsSchema
