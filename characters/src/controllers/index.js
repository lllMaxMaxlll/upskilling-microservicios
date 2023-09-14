const { catcherAsync } = require("../utils/");

module.exports = {
	getCharacters: catcherAsync(require("./getCharacters")),
	createCharacter: catcherAsync(require("./createCharacter")),
	// deleteCharacters: require("./deleteCharacters"),
	// updateCharacters: require("./updateCharacters"),
};
