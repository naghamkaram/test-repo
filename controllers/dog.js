const express = require("express");
const dogsService = require("../services/dog");
const router = express.Router();

router.get("/", async function listDogs(req, res, next) {
  const result = await dogsService.listDogs();
  res.json({ result });
});
router.get("/:id", async function getDog(req, res, next) {
  const id = req.params.id;
  const result = await dogsService.getDog(id);
  res.json({ result });
});
router.post("/", async function createDog(req, res, next) {
  const Joi = require("joi");
  const body = req.body;
  const schema = Joi.object().keys({
    name: Joi.string().max(20).required(),
    bread: Joi.string().max(20).required(),
    age: Joi.string().max(10).required(),
    isGoodBoy: Joi.boolean(),
  });

  const validation = schema.validate(body);

  if (validation.error == undefined){
    const result = await dogsService.createDog(body);
    res.json({ result });
  }else{
    res.send(validation);
  }
  
});
router.put("/:id", async function updateDog(req, res, next) {
  const id = req.params.id;
  const newBody = req.body;
  const result = await dogsService.updateDog(id, newBody);
  res.json({ result });
});
router.patch("/:id", async function updateDog1(req, res, next) {
  const id = req.params.id;
  const newBody = req.body;
  const result = await dogsService.updateDog1(id, newBody);
  res.json({ result });
});

router.delete("/:id", async function deleteDog(req, res, next) {
  const id = req.params.id;
  const result = await dogsService.deleteDog(id);
  res.json({ result });
});

module.exports = router;
