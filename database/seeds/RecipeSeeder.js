'use strict'

/*
|--------------------------------------------------------------------------
| RecipeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class RecipeSeeder {
  async run() {
    for (let i = 0; i < 10; i++) {
      await this.createRecipe()
    }
  }

  async createRecipe() {
    const recipe = await Factory.model('App/Models/Recipe').create()
    const ingredients = await Factory.model('App/Models/Ingredient').createMany(5)

    const ingredientIds = ingredients.map((ingredient) => {
      return ingredient.id
    })

    await recipe.ingredients().attach(ingredientIds, (row) => {
      row.quantity = Math.random()
    })
  }
}

module.exports = RecipeSeeder
