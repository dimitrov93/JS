import express from "express";
import controller from "./controller";
import prefix from "./prefix";
// Middleware
import upload from "../../../../middleware/upload";

const router = express.Router();

router.post(prefix + "/login", upload.none(), controller.login);

router.post(prefix + "/signup", upload.none(), controller.signup);

export default router;
