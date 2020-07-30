'use strict';

var mongoose = require('mongoose'),
  Recipe = mongoose.model('recipeSchema');

exports.findAllRecipe = function(req, res) {
  Recipe.find({}, function(err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

exports.createRecipe = function(req, res) {
  var new_Recipe = new Recipe(req.body);
  new_Recipe.save(function(err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

exports.findRecipeById = function(req, res) {
  Recipe.findById(req.params.recipeId, function(err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

exports.updateRecipe = function(req, res) {
  Recipe.updateOne({_id: req.params.recipeId}, req.body, {new: true}, function(err, recipe) {
    if (err)
      res.send(err);
    res.json(recipe);
  });
};

exports.deleteRecipe = function(req, res) {
  Recipe.deleteOne({_id: req.params.recipeId }, function(err, recipe) {
    if (err)
      res.send(err);
    res.json({ message: 'Recipe successfully deleted' });
  });
};
