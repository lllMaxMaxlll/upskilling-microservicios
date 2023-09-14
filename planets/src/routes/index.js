const { Router } = require("express");
const controllers = require("../controllers/");
const middleware = require("../middlewares");

const router = Router();

router.get("/", controllers.getPlanets);
router.post("/", middleware.planetValidation, controllers.createPlanet);

module.exports = router;
