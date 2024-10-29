<template>
  <div>
    <h1>Exercises</h1>
    <ul>
      <li v-for="exercise in exercises" :key="exercise._id">
        {{ exercise.name }} - {{ exercise.weight }} kg
      </li>
    </ul>
    <form @submit.prevent="addExercise">
      <input v-model="newExercise.name" placeholder="Exercise name" />
      <input v-model="newExercise.weight" placeholder="Weight" type="number" />
      <button type="submit">Add Exercise</button>
    </form>
  </div>
</template>

<script>
// import api from '@/api';

// export default {
//   data() {
//     return {
//       exercises: [],
//       newExercise: {
//         name: '',
//         weight: 0,
//       },
//     };
//   },
//   async created() {
//     this.exercises = await api.getExercises().then(response => response.data);
//   },
//   methods: {
//     async addExercise() {
//       const addedExercise = await api.addExercise(this.newExercise);
//       this.exercises.push(addedExercise.data);
//       this.newExercise.name = '';
//       this.newExercise.weight = 0;
//     },
//   },
// };
</script>