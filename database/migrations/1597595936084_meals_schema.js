'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MealsSchema extends Schema {
  up() {
    this.create('meals', (table) => {
      table.increments()
      table.string('type', 255).notNullable().index()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down() {
    this.drop('meals')
  }
}

module.exports = MealsSchema
