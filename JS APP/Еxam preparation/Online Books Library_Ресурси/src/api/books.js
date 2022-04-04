import * as api from './api.js';
import { clearUserData, setUserData } from '../util.js';

const endpoints = {
    'getAllBooks': '/data/books?sortBy=_createdOn%20desc',
    'bookById': '/data/books/',
    'edit': '/data/books/',
    'delete': '/data/books/',
    'create': '/data/books',
    'likes': '/data/likes'
}

export async function getAllBooks() {
    return api.get(endpoints.getAllBooks);
};

export async function getBookById(id) {
    return api.get(endpoints.bookById + id)
}

export async function getMyBooks(userId) {
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function edit(id, data) {
    return api.put(endpoints.edit + id, data)
}
export async function deleteBookById(id) {
    return api.del(endpoints.delete + id)
}

export async function create(data) {
    return api.post(endpoints.create, data)
}


export async function makeLike(bookId) {
    return api.post(endpoints.likes, {bookId})
}

export async function totalLikes(bookId) {
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

export async function totalLikesPerUser(bookId,userId) {
    if (!userId) {
        return false;
    }
    const likes = api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
    return likes
}



