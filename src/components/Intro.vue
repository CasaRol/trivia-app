<template>
  <div>
    <div id="intro">
      <h3>Description:</h3>
      <p>{{ description }}</p>
      <hr id="option-section" />
      <div class="form">
        <form>
          <label>Select Category: </label>
          <select class="form-control">
            <option
              v-for="category in Object.keys(categories)"
              :key="category"
              :value="categories[category]"
              v-html="category"
            ></option>
          </select>
          <br />
          <label>Number of Questions:</label
          ><input
            class="form-control"
            id="amount"
            type="number"
            min="1"
            max="50"
            value="10"
          />
        </form>
      </div>
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
      categories: {
        "Any Category": 0,
        "General Knowledge": 9,
        "Entertainment: Books": 10,
        "Entertainment: Film": 11,
        "Entertainment: Music": 12,
        "Entertainment: Musicals &amp; Theatres": 13,
        "Entertainment: Television": 14,
        "Entertainment: Video Games": 15,
        "Entertainment: Board Games": 16,
        "Science &amp; Nature": 17,
        "Science: Computers": 18,
        "Science: Mathematics": 19,
        "Mythology": 20,
        "Sports": 21,
        "Geography": 22,
        "History": 23,
        "Politics": 24,
        "Art": 25,
        "Celebrities": 26,
        "Animals": 27,
        "Vehicles": 28,
        "Entertainment: Comics": 29,
        "Science: Gadgets": 30,
        "Entertainment: Japanese Anime &amp; Manga": 31,
        "Entertainment: Cartoon &amp; Animations": 32,
      },
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

#option-section {
  margin-bottom: 2em;
}

.form {
  display: block;
  width: 60%;
  max-width: 500px;
  margin: auto;
}

form {
  display: inline-block;
  width: 100%;
}

.form-control {
  display: block;
  width: 100%;
  height: 45px;
  padding: 0px 15px;
  font-size: 15px;
  color: #464545;
  background-color: white;
  background-image: none;
  border: 1px solid black;
  border-radius: 4px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
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