<template>
  <div id="app">
    <h1 id="pageTitle">Trivia Game!</h1>
    <question-main />
  </div>
</template>

<script>
import QuestionMain from "./components/QuestionMain.vue";

export default {
  name: "App",
  data() {
    return {
      showIntro: true,
      showQuestionMain: false,
    };
  },
  components: {
    QuestionMain,
  },
};
</script>

<style>
#app {
}

#pageTitle {
  text-align: center;
}
</style>
