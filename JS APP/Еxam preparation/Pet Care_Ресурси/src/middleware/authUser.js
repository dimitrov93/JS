import { getUserData } from "../util.js";


export const authUser = (ctx, next) => {
    ctx.user = getUserData();

    next();
}