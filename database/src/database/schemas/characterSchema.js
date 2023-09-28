const { Schema } = require("mongoose");

const characterSchema = new Schema({
	_id: String,
	name: String,
	height: String,
	mass: String,
	hair_color: String,
	skin_color: String,
	eye_color: String,
	birth_year: String,
	gender: String, // Se puede usar un ENUM
	homeworld: {
		type: String, // Referencia a el id del planeta
		ref: "Planet",
	},
	films: [
		{
			type: String, // Referencia a el id de la película
			ref: "Film",
		},
	],
});

characterSchema.statics.list = async function () {
	return await this.find().populate("homeworld", ["_id", "name"]).populate("films", ["_id", "title"]);
};

characterSchema.statics.getById = async function (id) {
	return await this.findById(id).populate("homeworld", ["_id", "name"]).populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
	return await this.create(character);
};

module.exports = characterSchema;
