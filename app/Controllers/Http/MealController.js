const Meal = use('App/Models/Meal')

class MealController {
  async index({
    view
  }) {
    const meals = await Meal.all()
    return view.render('meals.index', {
      meals: meals.toJSON()
    })
  }
}

module.exports = MealController
