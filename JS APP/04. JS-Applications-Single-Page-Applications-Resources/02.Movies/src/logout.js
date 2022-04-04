import { updateNav } from "./util.js";

export function logoutPage() {
    localStorage.removeItem('user');
    updateNav();
}