const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
	const { name } = req.body;
	if (!name) throw new ClientError("Name is required", 401);
	return next();
};
