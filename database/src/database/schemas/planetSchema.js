const { Schema } = require("mongoose");

const planetSchema = new Schema({
	_id: String,
	name: String,
	rotation_period: String,
	orbital_period: String,
	diameter: String,
	climate: String,
	gravity: String,
	terrain: String,
	surface_water: String,
	residents: [
		{
			type: String, // Referencia a el id del character
			ref: "Character",
		},
	],
	films: [
		{
			type: String, // Referencia a el id de la película
			ref: "Film",
		},
	],
});

planetSchema.statics.list = async function () {
	return await this.find().populate("residents", ["_id", "name"]).populate("films", ["_id", "title"]);
};

planetSchema.statics.getById = async function (id) {
	return await this.findById(id).populate("residents", ["_id", "name"]).populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function (character) {
	return await this.create(character);
};

module.exports = planetSchema;
