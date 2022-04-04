import page from "../node_modules/page/page.mjs";
import { browseTeamsView } from "../views/browseTeams.js";
import { createView } from "../views/create.js";
import { homeView } from "../views/homeView.js";
import { loginView } from "../views/login.js";
import { logoutView } from "../views/logout.js";
import { myteamsView } from "../views/myteams.js";
import { registerView } from "../views/register.js";
import { authMiddleware } from "./middleWares/authMiddleware.js";
import { renderMiddlewareMain, renderMiddlewareNav } from "./middleWares/renderMiddleware.js";

page(authMiddleware)
page(renderMiddlewareNav)
page(renderMiddlewareMain)
page('/', homeView)
page('/browseteams', browseTeamsView)
page('/login', loginView)
page('/register', registerView)
page('/myteams', myteamsView)
page('/createTeam', createView)
page('/logout', logoutView)

page.start()