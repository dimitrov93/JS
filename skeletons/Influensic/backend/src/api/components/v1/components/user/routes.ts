import express from "express";
import controller from "./controller";
import prefix from "./prefix";
// Middleware
import token from "../../middleware/token";

const router = express.Router();

router.get(prefix + "/", token, controller.fetch);

export default router;
