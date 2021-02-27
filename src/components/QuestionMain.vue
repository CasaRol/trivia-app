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
    <question-child :question="questions[currentQuestion]" />
    <hr />
  </div>
</template>

<script>
import { getAllQuestions } from "../utils/fetchAndProcessQuestions";
import QuestionChild from "./QuestionChild";

export default {
  components: {
    QuestionChild,
  },
  data() {
    return {
      questions: [],
      score: 50,
      currentQuestion: 0,
      totalQuestions: 10,
    };
  },
  created() {
    this.loadAndProcessQestions();
  },
  methods: {
    async loadAndProcessQestions() {
      let tmpArray = await getAllQuestions();

      tmpArray.forEach((element) => {
        let optionsArray = [];
        optionsArray.push(element.correct_answer);
        element.incorrect_answers.forEach((answer) => {
          optionsArray.push(answer);
        });

        let question = {
          mainQuestion: element.question,
          correctAnswer: element.correct_answer,
          options: this.shuffle(optionsArray),
          picked: "",
        };
        this.questions.push(question);
      });
      console.log(this.questions);
    },
    //Shuffle method copied from "https://bost.ocks.org/mike/shuffle/"
    shuffle(array) {
      var copy = [];
      let n = array.length;
      let i;

      // While there remain elements to shuffle…
      while (n) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * n--);

        // And move it to the new array.
        copy.push(array.splice(i, 1)[0]);
      }

      return copy;
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