'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Ingredient', (faker) => {
  const unit = ['unit', 'g', 'l', 'pinch', 'tsp', 'tbsp']

  return {
    name: faker.word(),
    unit: unit[Math.floor(Math.random() * unit.length)]
  }
})

Factory.blueprint('App/Models/Recipe', (faker) => {
  return {
    name: faker.word()
  }
})

Factory.blueprint('App/Models/Meal', () => {
  const type = ['breakfast', 'lunch', 'dinner']

  return {
    type: type[Math.floor(Math.random() * type.length)]
  }
})
