const { catcherAsync } = require("../utils/");

module.exports = {
	getFilms: catcherAsync(require("./getFilms")),
	getFilmById: catcherAsync(require("./getFilmById.js")),
	createFilm: catcherAsync(require("./createFilm")),
	// deleteCharacters: require("./deleteCharacters"),
	// updateCharacters: require("./updateCharacters"),
};
