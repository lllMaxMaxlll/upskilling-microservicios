const Planets = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
	const newPlanet = await Planets.create();
	response(res, 201, newPlanet);
};
