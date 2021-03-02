export { getAllQuestions, processFetchedQuestions }

let QUESTION_URL = "https://opentdb.com/api.php?"

const getAllQuestions = (numberOfQuestions, category) => {
	const URL = buildUrl(numberOfQuestions, category)
	return fetch(URL)
		.then((response) => response.json())
		.then((response) => response.results)
}

function buildUrl(numberOfQuestions, category) {
	let URL = QUESTION_URL
	const requestParamForCategory = `&category=${category}`
	const requestParamForNumberOfQuestions = `amount=${numberOfQuestions}`

	URL = URL.concat(requestParamForNumberOfQuestions)

	if (category != 0) {
		URL = URL.concat(requestParamForCategory)
	}

	return URL
}

function processFetchedQuestions(fetchedQuestions) {
	const processedQuestions = []

	fetchedQuestions.forEach((fetchedQuestion) => {
		const optionsArray = []
		optionsArray.push(fetchedQuestion.correct_answer)
		fetchedQuestion.incorrect_answers.forEach((answer) => {
			optionsArray.push(answer)
		})

		const processedQuestion = {
			mainQuestion: fetchedQuestion.question,
			options: shuffle(optionsArray),
			correctAnswer: fetchedQuestion.correct_answer,
			selectedOption: "",
		}
		processedQuestions.push(processedQuestion)
	})

	return processedQuestions
}

//Shuffle method adapted from "https://bost.ocks.org/mike/shuffle/"
function shuffle(array) {
	const copy = []
	let n = array.length
	let i

	// While there remain elements to shuffle…
	while (n) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * n--)

		// And move it to the new array.
		copy.push(array.splice(i, 1)[0])
	}

	return copy
}
