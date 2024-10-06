import express from 'express';
import Exercise from '../models/Exercises.js';

const router = express.Router();

// Route to get all exercises
router.get('/exercises', async (req, res) => {
  try {
    const exercises = await Exercise.find(); // Get all exercises
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exercises', error });
  }
});
// Assuming Exercise is your Mongoose model



// Route to get exercises by category
router.get('/exercises/category/:category', async (req, res) => {
  try {
    const exercises = await Exercise.find({ category: req.params.category }); // Get exercises by category
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exercises by category', error });
  }
});
// Route to fetch exercise by ID
router.get('/exercises/_id/:_id', async (req, res) => {
  try {
      const exerciseId = req.params._id;
      const exercise = await Exercise.findById(exerciseId);

      if (!exercise) {
          return res.status(404).json({ message: 'Exercise not found' });
      }

      res.status(200).json(exercise);
  } catch (error) {
      console.error('Error fetching exercise by ID:', error);
      res.status(500).json({ message: "Error fetching exercise", error });
  }
});


export default router;
