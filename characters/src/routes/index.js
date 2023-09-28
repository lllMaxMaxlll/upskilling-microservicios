const { Router } = require("express");
const controllers = require("../controllers/");
const middleware = require("../middlewares");

const router = Router();

router.get("/characters", controllers.getCharacters);
router.get("/characters/:id", controllers.getCharacterById);
router.post("/characters", middleware.characterValidation, controllers.createCharacter);

module.exports = router;
