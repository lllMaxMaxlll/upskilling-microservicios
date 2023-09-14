const { catcherAsync } = require("../utils/");

module.exports = {
	getPlanets: catcherAsync(require("./getPlanets")),
	createPlanet: catcherAsync(require("./createPlanet")),
	// deleteCharacters: require("./deleteCharacters"),
	// updateCharacters: require("./updateCharacters"),
};
