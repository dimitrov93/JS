import { html, render, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as albumService from "../authServices/musicServer.js"


export const deleteView =  async (ctx) => {
    try {
        let albumId = ctx.params.albumId;
        const album = await albumService.getOne(albumId);
        let confirmed = confirm(`Do you want to delete the album: ${album.name}?`)
        if (confirmed) {
            await albumService.remove(albumId)
            ctx.page.redirect('/catalog')
        }
    } catch (err) {
        alert(err);
    }

}