<template>
  <div id="question-area">
    <h1 v-html="question.mainQuestion"></h1>
    <div class="grid-container">
      <button
        class="grid-item"
        v-for="option in question.options"
        :key="option"
        v-html="option"
        @click="$emit('answer-option-button-clicked', option)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
}

.grid-item {
  text-align: center;
  font: bold;
  padding: 2rem;
  margin: 1rem;
}

#question-area button {
  border-radius: 25rem;
  background-color: rgb(20, 136, 224);
  font-size: 2rem;
}

#question-area button:hover {
  background-color: rgb(242, 165, 0);
}

#question-area button:focus {
  outline: none;
}

#question-area h1 {
  text-align: center;
}
</style>