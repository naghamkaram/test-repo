const express = require("express");
const mongoose = require("mongoose"); // we import mongoose
const app = express(); // initalize the app with express module
app.use(express.json());

app.use("/api", require("./controllers"));
// const { Dog } = require("./models/models");

// app.get("/", (req, res) => {
//   return res.json({ message: "Hello Nagham" });
// });

// // server config
// app.get("/dogs", async (req, res) => {
//   const alldogs = await Dog.find();
//   return res.status(200).json(alldogs);
// });
// // this route is done to go to the model and find all the dogs
// app.get("/dogs/:id", async (req, res) => {
//   const { id } = req.params;
//   const dog = await Dog.findById(id);
//   return res.status(200).json(dog);
// });
// // this route is done to fetch just one dog by its id ,
// // we passed the id document we want to fetch in the endpoint's parameter
// app.post("/dogs", async (req, res) => {
//   const newDog = new Dog({ ...req.body });
//   const insertedDog = await newDog.save();
//   return res.status(201).json(insertedDog);
// });
// // using the post method we added the data from the request body to the database

// app.put("/dogs/:id", async (req, res) => {
//   const { id } = req.params;
//   await Dog.updateOne({ id }, req.body);
//   const updatedDog = await Dog.findById(id);
//   return res.status(200).json(updatedDog);
// });
// //using the updated data we will pass the id as a parameter and we will get data from the req body

// app.delete("/dogs/:id", async (req, res) => {
//   const { id } = req.params;
//   const deletedDog = await Dog.findByIdAndDelete(id);
//   return res.status(200).json(deletedDog);
// });
// removing the document from the collection as we pass the id of the document we want to eliminate
// as parameter in the end point

const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017"); //connect our mongoose to database
    mongoose.set("strictQuery", false);
    app.listen(3000, () => console.log("server started on port:3000"));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
