'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShoppingListItemsSchema extends Schema {
  up () {
    this.create('shopping_list_items', (table) => {
      table.increments()
      table.integer('ingredient_id').unsigned().references('id').inTable('ingredients')
      table.integer('quantity').notNullable()
      table.integer('unit').notNullable()
      table.date('deleted_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('shopping_list_items')
  }
}

module.exports = ShoppingListItemsSchema
