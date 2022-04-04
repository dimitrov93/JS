import page from "../node_modules/page/page.mjs"
import { authUser } from "./middleware/authUser.js";
import { renderMain, renderNav } from "./middleware/render.js";
import { allView } from "./views/all.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { logoutView } from "./views/logout.js";
import { profiteView } from "./views/profile.js";
import { regView } from "./views/register.js";


page(authUser)
page(renderNav);
page(renderMain);
page('/', homeView)
page('/login', loginView)
page('/register', regView)
page('/all', allView)
page('/create', createView)
page('/logout', logoutView)
page('/details/:id', detailsView)
page('/edit/:id', editView)
page('/profile', profiteView)



page.start()
