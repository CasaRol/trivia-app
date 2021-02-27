<template>
  <div id="app">
    <h1 id="pageTitle">Trivia Game!</h1>
    <intro v-if="showIntro" :/>
    <question-main v-if="showQuestionMain"/>
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";
import QuestionMain from './components/QuestionMain.vue';


export default {
  name: "App",
  data() {
    return {
      showIntro: true,
      showQuestionMain: false
    }
  },
  components: {
    Intro,
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
