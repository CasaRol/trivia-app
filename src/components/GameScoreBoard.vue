<template>
  <div>
    <hr />
    <div v-if="currentQuestion <= totalQuestions" id="header" class="grid-container">
      <p class="grid-item">Score: {{ score }}</p>
      <p class="grid-item">
        Question: {{ currentQuestion }}/{{ totalQuestions }}
      </p>
    </div>
    <div v-else id="header">
      <p class="grid-item">Final score: {{ score }}/{{ totalQuestions * pointsForCorrectAnswer }}</p>
    </div>
    <hr />
    <game-screen
      v-if="currentQuestion <= totalQuestions"
      :question="questions[currentQuestion - 1]"
      @answer-option-button-clicked="handleAnswerOptionButtonClicked"
    />
    <results :questions="questions" v-else />
    <hr />
  </div>
</template>

<script>
import {
  getAllQuestions,
  processFetchedQuestions,
} from "../utils/fetchAndProcessQuestions";
import GameScreen from "./GameScreen";
import Results from "./Results";

export default {
  components: {
    GameScreen,
    Results,
  },
  data() {
    return {
      questions: [],
      score: 0,
      currentQuestion: 1,
      totalQuestions: 10,
      pointsForCorrectAnswer: 10
    };
  },
  created() {
    this.loadQuestions();
  },
  methods: {
    async loadQuestions() {
      const fetchedQuestions = await getAllQuestions();
      this.questions = processFetchedQuestions(fetchedQuestions);
    },

    // 'selectedOption' refers to the 2nd parameter of the '$emit' method @click in QuestionChild (built-in functionality)
    handleAnswerOptionButtonClicked(selectedOption) {
      const indexOfCurrentQuestion = this.currentQuestion - 1;
      const correctAnswer = this.questions[indexOfCurrentQuestion]
        .correctAnswer;
      if (selectedOption == correctAnswer) {
        this.score += this.pointsForCorrectAnswer;
      }
      // Recording the selected option
      this.questions[indexOfCurrentQuestion].selectedOption = selectedOption;
      // Moving to the next question
      this.currentQuestion++;
    },
  },
};
</script>

<style>
#header p {
  font-size: 1.75rem;
  padding: 0.5rem;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
}

.grid-item {
  text-align: center;
  font: bold;
}
</style>