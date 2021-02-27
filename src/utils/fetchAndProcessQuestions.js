const QUESTION_URL = "https://opentdb.com/api.php?amount=10&category=18"

export const getAllQuestions = () => {
    return fetch(QUESTION_URL)
        .then(response => response.json())
        .then(response => response.results)
}