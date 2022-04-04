import * as authService from '../authServices/authService.js';

export const authMiddleware = (ctx, next) => {
    ctx.user = authService.getUser();

    next();
};