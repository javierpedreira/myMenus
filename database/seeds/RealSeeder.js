'use strict'

/*
|--------------------------------------------------------------------------
| RealSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const fs = require('fs').promises;

class RealSeeder {
  async run () {
    await Database.raw(`    
      INSERT INTO "meals" ("id", "type", "user_id", "created_at", "updated_at") VALUES
      ('1', 'Desayuno', '1', NULL, NULL),
      ('2', 'Comida', '1', NULL, NULL),
      ('3', 'Cena', '1', NULL, NULL);
    `)

    await Database.raw(`
      INSERT INTO "ingredients" ("id", "name", "unit", "user_id", "created_at", "updated_at") VALUES
      ('1', 'Arroz', 'g', '1', NULL, NULL),
      ('2', 'Tomate frito', 'jar', '1', NULL, NULL),
      ('3', 'Plátano', 'unit', '1', NULL, NULL),
      ('4', 'Huevo', 'unit', '1', NULL, NULL),
      ('5', 'Tomate', 'unit', '1', NULL, NULL),
      ('6', 'Mozarella', 'g', '1', NULL, NULL),
      ('7', 'Orégano', 'tsp', '1', NULL, NULL),
      ('8', 'Caquita', 'unit', '1', NULL, NULL);
    `)

    await Database.raw(`    
      INSERT INTO "recipes" ("id", "name", "user_id", "created_at", "updated_at") VALUES
      ('1', 'Arroz a la cubana', '1', NULL, NULL),
      ('3', 'Caca', '1', NULL, NULL),
      ('2', 'Ensalada caprese', '1', NULL, NULL);
    `)

    await Database.raw(`
      INSERT INTO "ingredient_recipe" ("ingredient_id", "recipe_id", "quantity", "created_at", "updated_at") VALUES
      ('1', '1', '200', NULL, NULL),
      ('2', '1', '50', NULL, NULL),
      ('3', '1', '2', NULL, NULL),
      ('4', '1', '4', NULL, NULL),
      ('5', '2', '4', NULL, NULL),
      ('6', '2', '1', NULL, NULL),
      ('7', '2', '2', NULL, NULL),
      ('8', '3', '1', NULL, NULL);
    `)
  }
}

module.exports = RealSeeder
