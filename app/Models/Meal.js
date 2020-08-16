'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Meal extends Model {

  ingredients() {
    return this.belongsToMany('App/Models/Ingredient')
      .withPivot(['quantity'])
  }
}

module.exports = Meal
