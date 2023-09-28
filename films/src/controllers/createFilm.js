const { response } = require("../utils");

module.exports = async (req, res) => {
	// const newFilm = await axios.post("http://database:8004/Film");
	response(res, 200, "Film created successfully");
};
