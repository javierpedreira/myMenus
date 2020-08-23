"use strict";
const Recipe = use("App/Models/Recipe");
const Meal = use("App/Models/Meal");
const MealRecipe = use("App/Models/MealRecipe");
class MenuController {
  async create({ request, response, view }) {
    // For each date in Range Create MealRecipe for each Meal
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
  }
}

module.exports = MenuController;
