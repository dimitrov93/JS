import { navView } from "./views/navigationView.js";
import page from "../node_modules/page/page.mjs"
import { renderContentMiddleware, renderNavMiddleware } from "./middlewares/rendermiddleware.js";
import { loginView } from "./views/logginView.js";
import { homeView } from "./views/homeView.js";
import { authMiddleware } from "./middlewares/authMiddleWare.js";
import { logout } from "./authServices/authService.js";
import { regView } from "./views/registerView.js";
import { catalogView } from "./views/catalogView.js";
import { searchView } from "./views/searchView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { deleteView } from "./views/deleteView.js";

page(authMiddleware)
page(renderNavMiddleware)
page(renderContentMiddleware)
page('/', homeView)
page('/login', loginView)
page('/logout', logout)
page('/register', regView)
page('/catalog', catalogView)
page('/search', searchView)
page('/create', createView)
page('/album/:albumId', detailsView)
page('/album/:albumId/edit', editView)
page('/album/:albumId/delete', deleteView)




page.start()    