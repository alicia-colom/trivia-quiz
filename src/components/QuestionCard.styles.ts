import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1100px;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 15px;
	border: 2px solid #6e0728;
	padding: 20px;
	box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
	text-align: center;
	p {
		font-size: 1rem;
	}
	.number {
		margin: 10px 0 0 0;
		font-size: 0.85rem;
		font-style: italic;
		@media (max-width: 500px) {
			font-size: 0.7rem;
		}
	}
`;

type ButtonWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	transition: all 0.3s ease;
	:hover {
		opacity: 0.75;
	}
	button {
		cursor: pointer;
		width: 100%;
		height: 40px;
		margin: 5px 0;
		background: ${({ correct, userClicked }) =>
			correct
				? '#0fca6c'
				: !correct && userClicked
				? '#ff4343'
				: 'linear-gradient(90deg, #f34194, #7c0229)'};
		user-select: none;
		border: 3px solid #ffffff;
		box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		font-size: 0.85rem;
		color: #fefefe;
		text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4);
	}
`;
