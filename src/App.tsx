import React, { useState } from 'react';
import { fetchQuizQuestions } from './services/API';
// Components
import QuestionCard from './components/QuestionCard';
// Types
import { QuestionState, Difficulty } from './services/API';

type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestions(
			TOTAL_QUESTIONS,
			Difficulty.EASY
		);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

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
			{/* <QuestionCard
				questionNumber={number + 1}
				totalQuestions={TOTAL_QUESTIONS}
				question={questions[number].question}
				answers={questions[number].answers}
				userAnswer={userAnswers ? userAnswers[number] : undefined}
				callback={checkAnswer}
			/> */}
			<button className="next" onClick={nextQuestion}>
				Go to next question
			</button>
		</>
	);
}

export default App;
