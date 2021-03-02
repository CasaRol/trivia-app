import Vue from "vue"
import Vuex from "vuex"
import { getAllQuestions, processFetchedQuestions } from "../utils/fetchAndProcessQuestions"

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		selectedCategory: 0,
        numberOfQuestions: 10,
		questions: [],
	},
	mutations: {
		setSelectedCategory: (state, payload) => {
			state.selectedCategory = payload
		},
        setNumberOfQuestions: (state, payload) => {
            state.numberOfQuestions = payload
        },
		setQuestions: (state, payload) => {
			state.questions = payload
		},
	},
	actions: {
		async loadQuestions({state, commit}) {
            console.log("loadQuesions() running...")
			const fetchedQuestions = await getAllQuestions(state.numberOfQuestions, state.selectedCategory)
			const processedQustions = processFetchedQuestions(fetchedQuestions)
            commit("setQuestions", processedQustions)
		},
	},
	getters: {
        selectedCategory: (state) => {
            return state.selectedCategory
        },
        numberOfQuestions: (state) => {
            return state.numberOfQuestions
        },
        questions: (state) => {
            return state.questions
        }
    },
})

export default store