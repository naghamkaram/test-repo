const mongoose = require("mongoose");

const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bread: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  isGoodGirl: {
    type: Boolean,
    required: true,
    default: true,  
  },
});
const Cat = mongoose.model("Cat", CatSchema);
// we called the method model from mongoose to create a model in the database
// with the name dog and the properties in the dog schema
module.exports = { Cat }; //exporting the model or object called dog
