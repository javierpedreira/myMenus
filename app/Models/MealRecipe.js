"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Database = use("Database");

class MealRecipe extends Model {
  static async create(mealId, recipeId, date) {
    await Database.raw(
      "INSERT INTO meal_recipe (meal_id, recipe_id, date) VALUES(?, ?, ?)",
      [mealId, recipeId, date]
    );
  }
}

module.exports = MealRecipe;
