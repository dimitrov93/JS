import express from "express";
import controller from "./controller";
import prefix from "./prefix";

const router = express.Router();

router.get(prefix + "/", controller.api);

export default router;
