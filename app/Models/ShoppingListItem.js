'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database')

class ShoppingListItem extends Model {
  static async create(startDate, endDate) {
    await Database.raw(`
      INSERT INTO shopping_list_items (ingredient_id, quantity, unit) 
        SELECT ingredient_id, sum(quantity), unit 
        FROM meal_recipe mr
        JOIN recipes r ON mr.recipe_id = r.id
        JOIN ingredient_recipe ir ON r.id = ir.recipe_id
        JOIN ingredients i ON ir.ingredient_id = i.id
        WHERE mr.date BETWEEN ? AND ?
        GROUP BY ingredient_id`, 
      [startDate, endDate])
    }

  ingredient() {
    return this.belongsTo('App/Models/Ingredient')
  }
}

module.exports = ShoppingListItem
