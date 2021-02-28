<template>
  <div>
    <div id="intro">
      <h3>Description:</h3>
      <p>{{ description }}</p>
      <hr />
      <dl>
        <dt>Category</dt>
        <dd>Science: Computers</dd>
        <dt>Number of questions</dt>
        <dd>10</dd>
      </dl>
    </div>
    <div id="button-placement">
      <button @click="onStartClicked">Start Game</button>
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
  methods: {
    onStartClicked() {
      this.$emit("start-clicked");
    },
  },
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

dt {
  display: block;
  float: left;
  width: 50%;
  text-align: right;
  font-weight: bold;
  font-style: italic;
  padding: 0.5em 0.5em;
}

dt:after {
  content: ":";
}

dd {
  display: block;
  padding: 0.5em 0.5em;
}

#button-placement {
  text-align: center;
  margin-top: 2rem;
}

#button-placement button {
  background-color: chartreuse;
  font-size: 20px;
  padding: 2rem;
  border-radius: 2rem;
}

#button-placement button:hover {
  background-color: rgb(242, 165, 0);
}

#button-placement button:focus {
  outline: 0;
}
</style>