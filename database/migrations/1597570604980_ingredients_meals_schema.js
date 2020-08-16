'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MealIngredientsSchema extends Schema {
  up() {
    this.create('ingredients_meals', (table) => {
      table.integer('ingredient_id').unsigned().references('id').inTable('ingredients')
      table.integer('meal_id').unsigned().references('id').inTable('meals')
      table.integer('quantity').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('ingredients_meals')
  }
}

module.exports = MealIngredientsSchema
