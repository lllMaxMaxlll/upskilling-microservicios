const { catcherAsync } = require("../utils/");

module.exports = {
	getCharacters: catcherAsync(require("./getCharacters")),
	createCharaters: catcherAsync(require("./createCharacter")),
	// deleteCharacters: require("./deleteCharacters"),
	// updateCharacters: require("./updateCharacters"),
};
