<template>
  <div id="header">
    <div class="grid-container">
      <p class="grid-item">Score: {{ score }}</p>
      <p class="grid-item">
        Question: {{ currentQuestion }}/{{ totalQuestions }}
      </p>
    </div>
  </div>
</template>

<script>
import {getAllQuestions} from "../utils/fetchAndProcessQuestions"

export default {
  data() {
    return {
      questions: [],
      score: 50,
      currentQuestion: 5,
      totalQuestions: 100,
    };
  },
  created() {
    this.loadAndProcessQestions();
  },
  methods: {
    async loadAndProcessQestions() {
      console.log(await getAllQuestions());

      
    },
  },
};
</script>

<style>
#header {
  background-color: gray;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  padding: 1rem;
}

.grid-item {
  text-align: center;
  font: bold;
}
</style>