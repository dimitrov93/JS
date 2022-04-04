import page from "../node_modules/page/page.mjs";
import { authUser } from "./middleware/authUser.js";
import { renderMain, renderNav } from "./middleware/render.js";
import { allView } from "./views/all.js";
import { byYearView } from "./views/byYearView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/loginView.js";
import { logOut } from "./views/logoutView.js";
import { myListingsView } from "./views/myListingsView.js";
import { registerView } from "./views/registerView.js";

page(authUser)
page(renderNav);
page(renderMain);

page('/', homeView)
page('/login', loginView)
page('/logout', logOut)
page('/register', registerView)
page('/all', allView)
page('/create', createView)
page('/edit', editView)
page('/details/:id', detailsView)
page('/edit/:id', editView)
page('/listings', myListingsView)
page('/byYear', byYearView)


page.start();