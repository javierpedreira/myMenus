'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IngredientRecipeSchema extends Schema {
  up() {
    this.create('ingredient_recipe', (table) => {
      table.integer('ingredient_id').unsigned().references('id').inTable('ingredients')
      table.integer('recipe_id').unsigned().references('id').inTable('recipes')
      table.integer('quantity').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('ingredient_recipe')
  }
}

module.exports = IngredientRecipeSchema
