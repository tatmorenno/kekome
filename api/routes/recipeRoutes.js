'use strict';
module.exports = function(app) {
  var recipe = require('../controllers/recipeController');

  // todoList Routes
  app.route('/recipe')
    .get(recipe.findAllRecipe)
    .post(recipe.createRecipe);

  app.route('/recipe/:recipeId')
    .get(recipe.findRecipeById)
    .put(recipe.updateRecipe)
    .delete(recipe.deleteRecipe);
};