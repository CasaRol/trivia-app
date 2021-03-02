<template>
  <div id="app">
    <h1 id="pageTitle">Trivia Game!</h1>
    <intro v-if="showIntro" @start-clicked="handleStartClicked"/>
    <game-score-board v-if="!showIntro"/>
  </div>
</template>

<script>
import GameScoreBoard from "./components/GameScoreBoard";
import Intro from "./components/Intro";

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
    GameScoreBoard,
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
