<template>
  <div id="app">
    <h1 id="pageTitle">Trivia Game!</h1>
    <intro v-if="showIntro" @start-clicked="handleStartClicked" />
    <question-main v-if="!showIntro" />
  </div>
</template>

<script>
import QuestionMain from "./components/QuestionMain.vue";
import Intro from "./components/Intro.vue";

export default {
  name: "App",
  data() {
    return {
      showIntro: true,
    };
  },
  methods: {
    handleStartClicked() {
      this.showIntro = false;
    },
  },
  components: {
    Intro,
    QuestionMain,
  },
};
</script>

<style>
html {
  background-color: lightgray;
}

#pageTitle {
  text-align: center;
}
</style>
