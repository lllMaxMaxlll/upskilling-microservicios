const films = require("./films.json");
const { ClientError } = require("../utils/errors");

module.exports = {
	list: async () => films,
	create: async (film) => {
		throw new ClientError("Error creating film");
	},
};
