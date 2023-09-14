const { catcherAsync } = require("../utils/");

module.exports = {
	getFilms: catcherAsync(require("./getFilms")),
	createFilm: catcherAsync(require("./createFilm")),
	// deleteCharacters: require("./deleteCharacters"),
	// updateCharacters: require("./updateCharacters"),
};
