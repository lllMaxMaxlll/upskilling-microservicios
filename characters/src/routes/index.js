const { Router } = require("express");
const controllers = require("../controllers/");
const middleware = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters);
router.post("/", middleware.characterValidation, controllers.createCharaters);

module.exports = router;
