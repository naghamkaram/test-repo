const { Dog } = require("../models/dog");

module.exports.listDogs = async function listDogs() {
  return Dog.find({});
};

module.exports.getDog = async function getDog(id) {
  return Dog.findById(id);
};

module.exports.createDog = async function createDog(body) {
  return await Dog.create(body);
};
module.exports.updateDog = async function updateDog(id, newBody) {
  return await Dog.findByIdAndUpdate(id, newBody, { new: true });
};
module.exports.updateDog1 = async function updateDog1(id,newBody) {
    return await Dog.findByIdAndUpdate(id, newBody, { new: true });
  };

module.exports.deleteDog = async function deleteDog(id) {
    return await Dog.findByIdAndDelete(id);
    
  };
  