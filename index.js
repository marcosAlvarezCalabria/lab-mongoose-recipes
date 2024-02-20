const mongoose = require('mongoose');


// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    const newRecipe = {
      title: 'Your Recipe Title',
      level: 'Easy',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      cuisine: 'Your Cuisine',
      dishType: 'Dish Type',
      image: 'Image URL',
      duration: 30,
      creator: 'Your Name',
      created: new Date()
    };

   
    return Recipe.create(newRecipe);
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
