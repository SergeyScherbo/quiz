const generateDate = () => {
	const now = new Date();
	const date = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;

	return date;
}

export default generateDate;