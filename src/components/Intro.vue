<template>
  <div>
    <div id="intro">
      <h3>Description:</h3>
      <p id="random">{{ description }}</p>
    </div>
    <div id="button-placement" @click="handelStartClicked">
      <button>Start Game</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description:
        "This is a game for anyone who'd like to feel stupid when not knowing the answer to a simple question :D",
    };
  },
  props: [showIntro, showQuestionMain],
  methods: {
    handelStartClicked() {
      
    }
  }
};
</script>

<style>
#intro {
  border-style: solid;
  padding: 2rem;
}

#intro h3 {
  margin-bottom: 0px;
}

#intro p {
  margin-top: 0px;
}

#button-placement {
  text-align: center;
  margin-top: 2rem;
}

#button-placement button {
  background-color:chartreuse;
  font-size: 20px;
  padding: 2rem;
  border-radius: 2rem;
}

#button-placement button:focus {
    outline: 0;
}


</style>