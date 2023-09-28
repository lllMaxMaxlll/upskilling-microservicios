const server = require("./src/server");
const { PORT } = require("./src/config/env");

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
