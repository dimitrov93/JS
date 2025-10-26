import express from "express";
import controller from "./controller";
import prefix from "./prefix";
// Middleware
import token from "../../../../middleware/token";

const router = express.Router();

router.get(prefix + "/username", controller.username);

router.get(prefix + "/email", controller.email);

router.get(prefix + "/token", token, controller.token);

export default router;
