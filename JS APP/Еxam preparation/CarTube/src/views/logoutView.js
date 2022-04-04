import * as userService from "../api/user.js";


export async function logOut(ctx) {
    await userService.logout()
    ctx.page.redirect('/')
}