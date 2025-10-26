import express from "express";
import controller from "./controller";
import prefix from "./prefix";
// Middleware
import token from "../../../../middleware/token";
import upload from "../../../../middleware/upload";

const router = express.Router();

router.put(prefix + "/appearance", token, upload.none(), controller.appearance);

router.put(
  prefix + "/notifications",
  token,
  upload.none(),
  controller.notifications
);

router.put(prefix + "/security", token, upload.none(), controller.security);

export default router;
