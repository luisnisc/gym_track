// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getExercises() {
    return apiClient.get('/exercises');
  },
  addExercise(exercise) {
    return apiClient.post('/exercises', exercise);
  },
};