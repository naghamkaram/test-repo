const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema({
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
  isGoodBoy: {
    type: Boolean,
    required: true,
    default: true,  
  },
});
const Dog = mongoose.model("Dog", DogSchema);
// we called the method model from mongoose to create a model in the database
// with the name dog and the properties in the dog schema
module.exports = { Dog }; //exporting the model or object called dog
