'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MealIngredientsSchema extends Schema {
  up() {
    this.create('meal_ingredients', (table) => {
      table.integer('meal_id').unsigned().references('id').inTable('meals')
      table.integer('ingredient_id').unsigned().references('id').inTable('ingredients')
      table.integer('quantity').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('meal_ingredients')
  }
}

module.exports = MealIngredientsSchema
