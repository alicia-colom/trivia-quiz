import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/bg-pink-horizontal.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    display: flex;
    justify-content: center;
  }
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  max-width: 80vw;
	border-radius: 20px;
	padding: 0 20px 20px 20px;
  text-align: center;
  color: #212121;
  @media (max-width: 600px) {
    max-width: 100vw;

    }
	}
	.score {
    margin: 10px;
		font-size: 2rem;
    font-weight: 700;
    color: #fefefe;
    @media (max-width: 600px) {
      font-size: 1.75rem;
    }
    @media (max-width: 500px) {
      font-size: 1.25rem;
      margin: 7px;
    }
	}

	.title {
		font-family: Fascinate Inline;
		background-color: rgba(255, 255, 255, 0.75);
		font-weight: 400;
		font-size: 70px;
    text-transform: capitalize;
		margin: 20px;
		padding: 12px 20px;
		border-radius: 20px;
		color: #8d104b;
		border: 2px solid #fefefe;
  	box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
    @media (max-width: 680px) {
      font-size: 50px;
    }
    @media (max-width: 500px) {
      font-size: 30px;
	  	padding: 8px 12px;
		  margin: 8px;
    }
	}
	.start,
	.next {
		cursor: pointer;
		background-color: #8d104b;
		border: 3px solid #fefefe;
    color: #fefefe;
		border-radius: 15px;
		height: 45px;
		margin: 20px 0;
		padding: 0 40px;
		font-size: 1rem;
    font-weight: 700;
	}
	.start {
		max-width: 200px;
	}
`;
