<template>
  <div>
    <div id="intro">
      <h3>Description:</h3>
      <p>{{ description }}</p>
      <hr id="option-section" />
      <div class="form">
        <form>
          <label>Select Category: </label>
          <select id="selectedCategory" class="form-control">
            <option
              v-for="(category, index) in categories"
              :key="index"
              :value="category.codeForUrlParam"
              v-html="category.categoryName"
            ></option>
          </select>
          <br />
          <label>Number of Questions:</label
          ><input
            id="numberOfQuestions"
            class="form-control"
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
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      description:
        "This is a game for anyone who'd like to feel stupid when not knowing the answer to a simple question :D",
      categories: [
        { categoryName: "Any Category", codeForUrlParam: 0 },
        { categoryName: "General Knowledge", codeForUrlParam: 9 },
        { categoryName: "Entertainment: Books", codeForUrlParam: 10 },
        { categoryName: "Entertainment: Film", codeForUrlParam: 11 },
        { categoryName: "Entertainment: Music", codeForUrlParam: 12 },
        {
          categoryName: "Entertainment: Musicals &amp; Theatres",
          codeForUrlParam: 13,
        },
        { categoryName: "Entertainment: Television", codeForUrlParam: 14 },
        { categoryName: "Entertainment: Video Games", codeForUrlParam: 15 },
        { categoryName: "Entertainment: Board Games", codeForUrlParam: 16 },
        { categoryName: "Science &amp; Nature", codeForUrlParam: 17 },
        { categoryName: "Science: Computers", codeForUrlParam: 18 },
        { categoryName: "Science: Mathematics", codeForUrlParam: 19 },
        { categoryName: "Mythology", codeForUrlParam: 20 },
        { categoryName: "Sports", codeForUrlParam: 21 },
        { categoryName: "Geography", codeForUrlParam: 22 },
        { categoryName: "History", codeForUrlParam: 23 },
        { categoryName: "Politics", codeForUrlParam: 24 },
        { categoryName: "Art", codeForUrlParam: 25 },
        { categoryName: "Celebrities", codeForUrlParam: 26 },
        { categoryName: "Animals", codeForUrlParam: 27 },
        { categoryName: "Vehicles", codeForUrlParam: 28 },
        { categoryName: "Entertainment: Comics", codeForUrlParam: 29 },
        { categoryName: "Science: Gadgets", codeForUrlParam: 30 },
        {
          categoryName: "Entertainment: Japanese Anime &amp; Manga",
          codeForUrlParam: 31,
        },
        {
          categoryName: "Entertainment: Cartoon &amp; Animations",
          codeForUrlParam: 32,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["setSelectedCategory", "setNumberOfQuestions"]),
    ...mapActions(["loadQuestions"]),
    onStartClicked() {
      this.setSelectedCategory(
        document.getElementById("selectedCategory").value
      );
      this.setNumberOfQuestions(
        document.getElementById("numberOfQuestions").value
      );
      this.loadQuestions().then(() => {
        this.$emit("start-clicked");
      });
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