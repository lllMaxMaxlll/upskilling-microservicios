const axios = require("axios");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
	const { id } = req.params;
	if (!id) throw new ClientError("Id not provided", 404);
	const film = await axios.get(`http://database:8004/Film/${id}`);
	if (film.data === null) throw new ClientError("Film not found", 404);

	response(res, 200, film.data);
};
