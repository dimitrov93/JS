import express from "express";
import controller from "./controller";
import prefix from "./prefix";

const router = express.Router();

router.get(prefix + "/", controller.v1);

export default router;
