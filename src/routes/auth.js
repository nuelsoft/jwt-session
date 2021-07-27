const AuthController = require("../controllers/auth");
const router = require("express").Router();

router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.get("/secure", AuthController.anAuthenticatedRoute)

module.exports = router;