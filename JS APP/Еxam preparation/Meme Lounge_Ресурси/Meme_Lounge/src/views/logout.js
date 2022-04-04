import * as userService from "../api/user.js"

export async function logoutView(ctx) {
    await userService.logout()
    ctx.page.redirect('/')
}