'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ingredient extends Model {
  meals() {
    return this.belongsToMany('App/Models/Meal')
  }
}

module.exports = Ingredient
