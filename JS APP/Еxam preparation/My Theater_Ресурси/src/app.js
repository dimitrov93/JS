import page from "../node_modules/page/page.mjs"
import { authUser } from "./middleware/authUser.js";
import { renderMain, renderNav } from "./middleware/render.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { logoutView } from "./views/logout.js";
import { profileView } from "./views/profile.js";
import { registerView } from "./views/register.js";

page(authUser)
page(renderNav)
page(renderMain);
page('/', homeView)
page('/login', loginView)
page('/logout', logoutView)
page('/register', registerView)
page('/create', createView)
page('/profile', profileView)
page('/details/:id', detailsView)
page('/edit/:id', editView)

page.start();