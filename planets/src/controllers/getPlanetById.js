const axios = require("axios");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
	const { id } = req.params;
	if (!id) throw new ClientError("Id not provided", 404);
	const planets = await axios.get(`http://database:8004/Planet/${id}`);
	if (planets.data === null) throw new ClientError("Planet not found", 404);

	response(res, 200, planets.data);
};
