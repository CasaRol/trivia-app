<template>
  <div>
    <!--
    <h3 v-html="question.mainQuestion"></h3>
    <p>Your answer:</p>
    <p v-html="question.picked"></p>
    <p>Correct answer:</p>
    <p v-html="question.correctAnswer"></p>
    -->
  </div>
</template>

<script>
export default {
  props: ["question"],
  created() {
    this.printProp();
  },
  methods: {
    printProp() {
      console.log(this.question);
    },
  },
};
</script>

<style>
</style>