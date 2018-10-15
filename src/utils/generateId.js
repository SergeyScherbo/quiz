const generateId = (idLength) => {
	const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];

	let id = '';

	for (let i = 0; i < idLength; i++) {
		const nextSymbol = Math.floor(Math.random() * 3);

		if (nextSymbol === 0) {
			id += letters[Math.floor(Math.random() * letters.length)];
		} else if (nextSymbol === 1) {
			id += numbers[Math.floor(Math.random() * numbers.length)];
		} else {
			id += symbols[Math.floor(Math.random() * symbols.length)];
		}
	}

	return id;
}

export default generateId;