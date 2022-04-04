import * as authService from "../authServices/authService.js"

export const logoutView = (ctx) => {
    authService.logout()
    .then(data => {
        ctx.page.redirect('/')
    })
    .catch(err => console.log(err))
}