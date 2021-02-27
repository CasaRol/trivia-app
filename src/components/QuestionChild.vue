<template>
  <div>
    <h1 v-html="question.mainQuestion"></h1>
    <button
      v-for="option in question.options"
      :key="option"
      v-html="option"
    ></button>
  </div>
</template>

<script>
export default {
  props: ["question"],
};
</script>

<style>
</style>