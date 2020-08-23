INSERT INTO "adonis_schema" ("id", "name", "batch", "migration_time") VALUES
('136', '1503248427885_user', '1', '2020-08-23 11:30:46'),
('137', '1503248427886_token', '1', '2020-08-23 11:30:46'),
('138', '1597570293143_recipes_schema', '1', '2020-08-23 11:30:46'),
('139', '1597570490990_ingredients_schema', '1', '2020-08-23 11:30:46'),
('140', '1597570604980_ingredient_recipe_schema', '1', '2020-08-23 11:30:46'),
('141', '1597595936084_meals_schema', '1', '2020-08-23 11:30:46'),
('142', '1597598215810_meals_recipes_schema', '1', '2020-08-23 11:30:46'),
('143', '1598088464614_shopping_list_schema', '1', '2020-08-23 11:30:46');

INSERT INTO "ingredient_recipe" ("ingredient_id", "recipe_id", "quantity", "created_at", "updated_at") VALUES
('1', '1', '200', NULL, NULL),
('2', '1', '50', NULL, NULL),
('3', '1', '2', NULL, NULL),
('4', '1', '4', NULL, NULL),
('5', '2', '4', NULL, NULL),
('6', '2', '1', NULL, NULL),
('7', '2', '2', NULL, NULL);

INSERT INTO "ingredients" ("id", "name", "unit", "user_id", "created_at", "updated_at") VALUES
('1', 'Arroz', 'g', '1', NULL, NULL),
('2', 'Tomate frito', 'jar', '1', NULL, NULL),
('3', 'Plátano', 'unit', '1', NULL, NULL),
('4', 'Huevo', 'unit', '1', NULL, NULL),
('5', 'Tomate', 'unit', '1', NULL, NULL),
('6', 'Mozarella', 'g', '1', NULL, NULL),
('7', 'Orégano', 'tsp', '1', NULL, NULL);

INSERT INTO "meals" ("id", "type", "user_id", "created_at", "updated_at") VALUES
('1', 'Desayuno', '1', NULL, NULL),
('2', 'Comida', '1', NULL, NULL),
('3', 'Cena', '1', NULL, NULL);

INSERT INTO "recipes" ("id", "name", "user_id", "created_at", "updated_at") VALUES
('1', 'Arroz a la cubana', '1', NULL, NULL),
('2', 'Ensalada caprese', '1', NULL, NULL);

INSERT INTO "sqlite_sequence" ("name", "seq") VALUES
('adonis_schema', '143'),
('ingredients', '7'),
('meals', '3'),
('recipes', '2');

