const setLocal = (id, data) => {
	localStorage.setItem(id, JSON.stringify(data));
};

const getLocal = (id) => {
	return JSON.parse(localStorage.getItem(id));
};

export { setLocal, getLocal };