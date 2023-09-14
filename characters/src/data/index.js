const characters = require("./characters.json");

module.exports = {
	list: async () => characters,
	create: async (character) => {
		throw new Error("Not implemented");
	},
};
