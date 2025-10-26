import controller from "./controller";
import routes from "./routes";
import { User } from "./model";
import auth from "./components/auth";
import settings from "./components/settings";
import social from "./components/social";
import validate from "./components/validate";

export default {
  controller,
  routes,
  model: User,
  auth,
  settings,
  social,
  validate,
};
