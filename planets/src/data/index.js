const planets = require("./planets.json");
const { ClientError } = require("../utils/errors");

module.exports = {
	list: async () => planets,
	create: async (planet) => {
		throw new ClientError("Error creating planet");
	},
};
