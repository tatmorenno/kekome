var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Cake = require('./api/models/recipeModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cake',{
  useUnifiedTopology: true,
  useNewUrlParser: true,
}); 


app.use(bodyParser.urlencoded({ extended: true },{ useUnifiedTopology: true } ));
app.use(bodyParser.json());


var routes = require('./api/routes/recipeRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Recipe RESTful API server started on: ' + port);