const characters = require("./characters.json");
const { ClientError } = require("../utils/errors");

module.exports = {
	list: async () => characters,
	create: async (character) => {
		throw new ClientError("Error creating character");
	},
};
