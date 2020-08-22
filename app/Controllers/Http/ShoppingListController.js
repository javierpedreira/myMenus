'use strict'

const Database = use('Database')
const ShoppingListItem = use('App/Models/ShoppingListItem')

class ShoppingListController {
  async index({view}) {
    const items = await ShoppingListItem
      .query()
      .with('ingredient')
      .fetch()

    return view.render('shopping_list.index', {
      shoppingListItems: items.toJSON()
    })
  }
}

module.exports = ShoppingListController
