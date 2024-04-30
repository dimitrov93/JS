import express from "express";
import controller from "./controller";
import prefix from "./prefix";
// Middleware
import upload from "../../../../middleware/upload";
import token from "../../../../middleware/token";

const router = express.Router();

router.post(prefix + "/follow", token, upload.none(), controller.follow);

router.post(prefix + "/unfollow", token, upload.none(), controller.unfollow);

router.post(prefix + "/block", token, upload.none(), controller.block);

router.post(prefix + "/unblock", token, upload.none(), controller.unblock);

export default router;
