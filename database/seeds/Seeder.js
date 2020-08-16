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

class Seeder {
  async run() {
    let recipes = []
    for (let i = 0; i < 10; i++) {
      recipes.push(await this.createRecipe())
    }

    const meal = await Factory.model('App/Models/Meal').create()
    const recipe1 = recipes[Math.floor(Math.random() * recipes.length)]
    const recipe2 = recipes[Math.floor(Math.random() * recipes.length)]

    const date = Date.now()
    await meal.recipes().attach([recipe1.id, recipe2.id], (row) => {
      row.date = date
    })
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

    return recipe
  }
}

module.exports = Seeder
