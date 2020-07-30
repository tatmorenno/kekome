'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var recipeSchema = new Schema({

  title: {
    type: String,
    maxlength: 20,
    required: 'Inform the title of recipe'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  modoPreparo:{
    type: String,
    maxlength:3000,
    required: 'Say the preparation method'
  },
  rendimento:{
    type: String,
    maxlength: 40,
    required: 'Say the portions'
  },
  ingredientes:{
    type: Array(String),
    enum: [],
    require: true
  }
});

module.exports = mongoose.model('recipeSchema', recipeSchema);