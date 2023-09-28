const { catcherAsync } = require("../utils/");

module.exports = {
	getCharacters: catcherAsync(require("./getCharacters")),
	getCharacterById: catcherAsync(require("./getCharacterById.js")),
	createCharacter: catcherAsync(require("./createCharacter")),
	// deleteCharacters: require("./deleteCharacters"),
	// updateCharacters: require("./updateCharacters"),
};
