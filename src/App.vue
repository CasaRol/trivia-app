<template>
  <div id="app">
    <h1 id="pageTitle">Trivia Game!</h1>
    <intro />
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";

export default {
  name: "App",
  components: {
    Intro,
  },
};
</script>

<s
    QuestionMaintyle>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

#pageTitle {
  text-align: center;
}
</style>
