<template>
  <div>
    <h1>{{ question.mainQuestion }}</h1>
    <button v-for="option in question.options" :key="option">{{ option }}</button>
  </div>
</template>

<script>
export default {
  props: ["question"],
};
</script>

<style>
</style>