import * as authService from '../services/authServices.js'

export const authMiddleware = (ctx, next) => {
    let user = authService.getUser();
    ctx.user = user
    ctx.isAuthenticated = Boolean(user.username);

    next();
}