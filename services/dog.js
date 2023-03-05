const dogsDal = require("../dal/dog");

module.exports.listDogs = async function listDogs() {
  return dogsDal.listDogs();
};

module.exports.getDog = async function getDog(id) {
    return dogsDal.getDog(id);
  };

  module.exports.createDog = async function createDog(body) {
    return dogsDal.createDog(body);
  };
  module.exports.updateDog = async function updateDog(id, newBody) {
    return dogsDal.updateDog(id, newBody);
  };
  module.exports.updateDog1 = async function updateDog1(id, newBody) {
    return dogsDal.updateDog1(id, newBody);
  };
  module.exports.deleteDog = async function deleteDog(id) {
    return dogsDal.deleteDog(id);
  };

