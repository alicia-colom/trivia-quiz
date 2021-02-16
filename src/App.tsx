import React from 'react';
import QuestionCard from './components/QuestionCard';

function App() {
	const startTrivia = async () => {};

	const checkAnswer = (ev: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<>
			<h1>Take the Quiz</h1>
			<button className="start" onClick={startTrivia}>
				Start quiz
			</button>
			<p className="score">Your score:</p>
			<p className="loadingQuestion">Loading questions...</p>
			<QuestionCard />
			<button className="next" onClick={nextQuestion}>
				Go to next question
			</button>
		</>
	);
}

export default App;
