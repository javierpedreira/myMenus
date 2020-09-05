"use strict";
const moment = require('moment'); // require
const Recipe = use("App/Models/Recipe");
const Meal = use("App/Models/Meal");
const MealRecipe = use("App/Models/MealRecipe");
const ShoppingListItem = use("App/Models/ShoppingListItem");

class MenuController {
  async create({ request, response, view }) {
    const meals = await Meal.all();
    const recipes = await Recipe.all();
    const { startDate, endDate } = request.params;
    
    const dates = getDateArray(startDate, endDate, "DD-MM-YYYY")

    return view.render("menus.create", {
      meals: meals.toJSON(),
      recipes: recipes.toJSON(),
      dates: dates,
    });
  }

  async store({ request, response }) {
    const data = request.only(["meals", "dates", "recipes"]);
    const { meals, dates, recipes } = data;
    
    for (let i = 0; i < meals.length; i++) {
      MealRecipe.create(meals[i], recipes[i], dates[i]);
    }

    await ShoppingListItem.create(dates[0], dates[dates.length-1]);

    return response.redirect('shopping-list')
  }
}

const getDateArray = (start, end, format) => {
  const days = moment(end, format).diff(moment(start, format), 'days')

  return Array.from({length: days+1}, (x, i) => {
    return moment(start, format).add(i, 'days').format(format);
  })
}

module.exports = MenuController;
