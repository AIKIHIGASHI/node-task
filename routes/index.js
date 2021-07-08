const router = require("express").Router();
const homeController = require("../controllers/homeController");
const sessionController = require("../controllers/sessionController");
const userController = require("../controllers/userController");

router.get("/home", homeController.home);

router.get("/login", sessionController.new);

router.get("/", userController.new);

router.post("/", userController.create);

module.exports = router;
