'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ingredient extends Model {
  recipes() {
    return this.belongsToMany('App/Models/Recipe')
  }
}

module.exports = Ingredient
