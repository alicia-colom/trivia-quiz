import React, { useState } from 'react';
import { fetchQuizQuestions } from './services/API';
// Components
import QuestionCard from './components/QuestionCard';
// Types
import { QuestionState, Difficulty } from './services/API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
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

	const checkAnswer = (ev: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			//Users answer
			const answer = ev.currentTarget.value;
			//Check answer against the correct answer
			const correct = questions[number].correct_answer === answer;
			//Add score if answer is correct
			if (correct) setScore((prev) => prev + 1);
			//Save answer in the array userAnswers
			const answerObject: AnswerObject = {
				question: questions[number].question,
				answer: answer,
				correct: correct,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		//Move onto the next question if it's not the last question in the quiz
		const nextQuestion = number + 1;

		if (nextQuestion === TOTAL_QUESTIONS) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	return (
		<>
			<GlobalStyle />
				<Wrapper>
					<h1 className="title">Trivia quiz</h1>

					{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
						<button className="start" onClick={startTrivia}>
							Start quiz
						</button>
					) : null}

					{gameOver ? null : <p className="score">Your score: {score}</p>}

					{loading && <p className="loadingQuestion">Loading questions...</p>}

					{!gameOver && !loading && (
						<QuestionCard
							questionNumber={number + 1}
							totalQuestions={TOTAL_QUESTIONS}
							question={questions[number].question}
							answers={questions[number].answers}
							userAnswer={userAnswers ? userAnswers[number] : undefined}
							callback={checkAnswer}
						/>
					)}

					{!gameOver &&
					!loading &&
					userAnswers.length === number + 1 &&
					number !== TOTAL_QUESTIONS - 1 ? (
						<button className="next" onClick={nextQuestion}>
							Next question
						</button>
					) : null}
				</Wrapper>
		</>
	);
}

export default App;
