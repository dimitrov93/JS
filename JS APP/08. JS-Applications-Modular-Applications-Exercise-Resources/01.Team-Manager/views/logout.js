import * as authService from "../src/services/authServices.js";

export const logoutView = (ctx) => {
    authService.logout()
        .then(() => {
            ctx.page.redirect('/');
        });
};