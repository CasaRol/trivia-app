<template>
  <div id="app">
    <h1 id="pageTitle">Trivia Game!</h1>
    <intro v-if="showIntro" @start-clicked="handleStartClicked"/>
    <question-main v-if="showQuestionMain"/>
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
  methods: {
    handleStartClicked() {
      this.showIntro = false;
      this.showQuestionMain = true;
    }
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
