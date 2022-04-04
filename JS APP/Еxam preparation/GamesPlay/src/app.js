import page from "../node_modules/page/page.mjs";
import { authUser } from "./Middleware/authorization.js";
import { renderMainMiddleware, renderNavMiddleware } from "./Middleware/render.js";
import { catalogueView } from "./views/catalogeView.js";
import { editView } from "./views/edit.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/details.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

import * as api from './api/games.js';
import { searchPage } from "./views/searchView.js";
import { profilePage } from "./views/profile.js";
window.api = api

page(authUser)
page(renderNavMiddleware)
page(renderMainMiddleware)
page("/", homeView)
page("/login", loginView)
page("/register", registerView)
page("/catalog", catalogueView)
page("/myGames", profilePage)
page("/myGames/:userId", profilePage)
page("/search", searchPage)
page("/create", createView)
page("/logout", logoutView)
page("/details/:id", detailsView)
page("/edit/:id", editView)

page.start()