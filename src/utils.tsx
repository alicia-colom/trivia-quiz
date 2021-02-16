// Function to randomized the order when showing the answers
export const shuffleArray = (array: any[]) =>
	[...array].sort(() => Math.random() - 0.5);
