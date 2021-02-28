<template>
  <div>
    <hr />
    <div id="header" class="grid-container">
      <p class="grid-item">Score: {{ score }}</p>
      <p class="grid-item">
        Question: {{ currentQuestion }}/{{ totalQuestions }}
      </p>
    </div>
    <hr />
    <question-child
      v-if="currentQuestion <= totalQuestions"
      :question="questions[currentQuestion - 1]"
      @answer-option-button-clicked="handleAnswerOptionButtonClicked"
    />
    <results :questions="questions" v-else />
    <hr />
  </div>
</template>

<script>
import { getAllQuestions, processFetchedQuestions } from "../utils/fetchAndProcessQuestions";
import QuestionChild from "./QuestionChild";
import Results from "./Results";

export default {
  components: {
    QuestionChild,
    Results,
  },
  data() {
    return {
      questions: [],
      score: 0,
      currentQuestion: 1,
      totalQuestions: 10,
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
        this.score += 10;
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