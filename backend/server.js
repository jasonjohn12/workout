const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to db");
    app.listen(process.env.PORT, () => {
      console.log(`Connected to Db. Listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("error", error));
// middleware
// next calls the next function
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
