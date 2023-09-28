const { Schema } = require("mongoose");

const filmSchema = new Schema({
	_id: String,
	ttle: String,
	opening_crawl: String,
	director: String,
	producer: String,
	release_date: Date,
	characters: [
		{
			type: String, // Referencia a el id del character
			ref: "Character",
		},
	],
	planets: [
		{
			type: String, // Referencia a el id de la planeta
			ref: "Planet",
		},
	],
});

filmSchema.statics.list = async function () {
	return await this.find().populate("characters", ["_id", "name"]).populate("planets", ["_id", "name"]);
};

filmSchema.statics.getById = async function (id) {
	return await this.findById(id).populate("characters", ["_id", "name"]).populate("planets", ["_id", "name"]);
};

filmSchema.statics.insert = async function (film) {
	return await this.create(film);
};

module.exports = filmSchema;
