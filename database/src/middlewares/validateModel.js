module.exports = (req, res, next) => {
	const { model } = req.params;
	if (["Character", "Planet", "Film"].includes(model)) {
		return next();
	}
	return res.status(400).json({ error: "Invalid model" });
};
