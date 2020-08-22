const Recipe = use('App/Models/Recipe')
const Database = use('Database')

class RecipeController {
  async index({view}) {
    const recipes = await Recipe.all()

    const r = await Database.raw('INSERT INTO shopping_lists(ingredient_id, quantity, unit) SELECT ingredient_id, sum(quantity), unit FROM meal_recipe mr JOIN recipes r ON mr.recipe_id = r.id JOIN ingredient_recipe ir ON r.id = ir.recipe_id JOIN ingredients i ON ir.ingredient_id = i.id WHERE mr.date BETWEEN ? AND ? GROUP BY ingredient_id', [1598093329550, 1598093329550])

    return view.render('recipes.index', {
      recipes: recipes.toJSON()
    })
  }
}

module.exports = RecipeController
