"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.post("menu", "MenuController.store");
Route.post("menu/create", "MenuController.setMenuForm");
Route.get("menu/:startDate/:endDate", "MenuController.create");

Route.get("recipes", "RecipeController.index");
Route.get("shopping-list", "ShoppingListController.index");
