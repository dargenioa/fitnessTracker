const router = require("express").Router();
const Workout = require("../models/Workout");

//continue workout and new workout, makes a new workout and a new exercise
//it is not targeting a workout and adding another exeri

// View the total duration of each workout from the past seven workouts on the stats page.

// Important: Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout.
// Check out the MongoDB documentation on the $addFields,
// the MongoDB documentation on the $sum operator,
// and the Mongoose documentation on aggregate functions to learn how it can be accomplished.

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });


router.get("/api/workouts", (req, res) => {
  Workout.find({})
  .populate("exercises")
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([{
    $addFields: {
      totalDuation: {
        $sum: "$exercises.duration"
      }
    }
  }])
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;
