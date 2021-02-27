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

<style>
#app {
}

#pageTitle {
  text-align: center;
}
</style>
