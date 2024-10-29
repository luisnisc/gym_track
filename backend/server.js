// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for exercises
const exerciseSchema = new mongoose.Schema({
  name: String,
  weight: Number,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

// Routes
app.get('/exercises', async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
});

app.post('/exercises', async (req, res) => {
  const newExercise = new Exercise(req.body);
  await newExercise.save();
  res.status(201).json(newExercise);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});