// Questions that will be asked
const Questions = [{
	q: "Question 1: Which of the following is the largest ocean in the world?",
	a: [{ text: "Atlantic Ocean", isCorrect: false },
	{ text: "Pacific Ocean", isCorrect: true },
	{ text: "Indian Ocean", isCorrect: false },
	{ text: "Arctic Ocean", isCorrect: false }
	]

},
{
	q: "Question 2: What is the capital of France?",
	a: [{ text: " Paris", isCorrect: false, isSelected: true },
	{ text: "London", isCorrect: false },
	{ text: "Rome", isCorrect: false },
	{ text: "Berlin", isCorrect: false }
	]

},
{
	q: "Question 3: What is the chemical formula for water?",
	a: [{ text: "H2O", isCorrect: true },
	{ text: "CO2", isCorrect: false },
	{ text: "NaCl", isCorrect: false },
	{ text: "O3", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
