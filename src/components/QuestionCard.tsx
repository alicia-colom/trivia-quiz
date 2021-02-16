import React from 'react';

type Props = {
	question: string;
	answers: string[];
	callback: any;
	userAnswer: any;
	questionNumber: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNumber,
	totalQuestions,
}) => {
	return (
		<>
			<p className="number">
				Question: {questionNumber} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }}></p>

			<ul className="answerList">
				{answers.map((answer) => {
					return (
						<li className="answer">
							<button disabled={userAnswer} onClick={callback}>
								<span dangerouslySetInnerHTML={{ __html: answer }} />
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default QuestionCard;
