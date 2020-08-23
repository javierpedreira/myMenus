const Recipe = use("App/Models/Recipe");
const Database = use("Database");

class RecipeController {
  async index({ view }) {
    const recipes = await Recipe.all();

    return view.render("recipes.index", {
      recipes: recipes.toJSON(),
    });
  }
}

module.exports = RecipeController;
