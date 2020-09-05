"use strict";
const Recipe = use("App/Models/Recipe");
const Meal = use("App/Models/Meal");
const MealRecipe = use("App/Models/MealRecipe");
const ShoppingListItem = use("App/Models/ShoppingListItem");

class MenuController {
  async create({ request, response, view }) {
    const meals = await Meal.all();
    const recipes = await Recipe.all();
    const { startDate, endDate } = request.params;

    return view.render("menus.create", {
      meals: meals.toJSON(),
      recipes: recipes.toJSON(),
      startDate: startDate,
      endDate: endDate,
    });
  }

  async store({ request, response }) {
    const data = request.only(["meals", "dates", "recipes"]);
    const { meals, dates, recipes } = data;
    
    for (let i = 0; i < meals.length; i++) {
      MealRecipe.create(meals[i], recipes[i], dates[i]);
    }

    await ShoppingListItem.create(dates[0], dates[1]);

    return response.redirect('shopping-list')
  }
}

module.exports = MenuController;
