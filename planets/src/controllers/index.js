const { catcherAsync } = require("../utils/");

module.exports = {
	getPlanets: catcherAsync(require("./getPlanets")),
	getPlanetById: catcherAsync(require("./getPlanetById")),
	createPlanet: catcherAsync(require("./createPlanet")),
	// deleteCharacters: require("./deleteCharacters"),
	// updateCharacters: require("./updateCharacters"),
};
