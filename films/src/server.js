const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

server.use("*", (req, res) => {
	console.log("EN ERROR DE LA RUTA");
	res.status(404).send({
		error: true,
		message: "Not Found",
	});
});

server.use((err, req, res, next) => {
	res.status(err.statusCode || 500).send({
		error: true,
		message: err.message,
	});
});

module.exports = server;
