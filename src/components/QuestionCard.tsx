import React from 'react';
//Types
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
	question: string;
	answers: string[];
	callback: (ev: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
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
		<Wrapper>
			<p className="number">
				Question: {questionNumber} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }}></p>

			<div>
				{answers.map((answer, i) => {
					return (
						<ButtonWrapper
							key={i}
							correct={userAnswer?.correctAnswer === answer}
							userClicked={userAnswer?.answer === answer}
						>
							<button
								disabled={userAnswer ? true : false}
								value={answer}
								onClick={callback}
							>
								<span dangerouslySetInnerHTML={{ __html: answer }} />
							</button>
						</ButtonWrapper>
					);
				})}
			</div>
		</Wrapper>
	);
};

export default QuestionCard;
