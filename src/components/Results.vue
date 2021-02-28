<template>
  <div>
    <div
      id="result"
      class="result-grid-container"
      v-for="question in questions"
      :key="question.mainQuestion"
    >
      <p class="result-grid-item-left">Question:</p>
      <h2 class="result-grid-item-right" v-html="question.mainQuestion"></h2>

      <p class="result-grid-item-left">Your answer:</p>
      <h3 class="result-grid-item-right" v-html="question.selectedOption"></h3>

      <p class="result-grid-item-left">Correct Answer:</p>
      <h3 class="result-grid-item-right" v-html="question.correctAnswer"></h3>

      <p class="result-grid-item-left">Question result:</p>
      <h3
        v-if="question.correctAnswer === question.selectedOption"
        style="color: rgb(13, 209, 32)"
      >
        CORRECT!
      </h3>
      <h3 v-else style="color: red">INCORRECT!</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["questions"],
};
</script>

<style>
#result {
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: gray;
  border-radius: 2rem;
}

.result-grid-container {
  align-items: center;
  display: grid;
  grid-template-columns: 15% 90%;
}

.result-grid-item-left {
  width: 100%;
  text-align: center;
  font: bold;
}

.result-grid-item-right {
  width: 95%;
  text-align: left;
  font: none;
}
</style>