'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MealRecipeSchema extends Schema {
  up() {
    this.create('meal_recipe', (table) => {
      table.integer('meal_id').unsigned().references('id').inTable('meals')
      table.integer('recipe_id').unsigned().references('id').inTable('recipes')
      table.date('date').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('meal_recipe')
  }
}

module.exports = MealRecipeSchema
