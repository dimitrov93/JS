import * as api from './api.js';
import { clearUserData, setUserData } from '../util.js';

const endpoints = {
    'create': '/data/theaters',
    'all': '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    'details': '/data/theaters/',
    'delete': '/data/theaters/',
    'edit': '/data/theaters/',
    'like': '/data/likes',
    likesByGameID: '/data/likes?count&distinct=_ownerId&where=',
    ownLike: '/data/likes?&where=',
}

export async function getAll() {
    return api.get(endpoints.all);
};


export async function details(id) {
    return api.get(endpoints.details + id);
};

export async function edit(id, data) {
    return api.put(endpoints.edit + id, data);
};

export async function del(id) {
    return api.del(endpoints.delete + id);
};

export async function create(data) {
    return api.post(endpoints.create, data)
}

export async function getMine(userId) {
    return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function searchCars(searchText) {
    // const query = encodeURIComponent(`name like "${searchText}"`)
    return api.get(`/data/cars?where=year%3D${searchText}`)
}

export async function clickLike(theaterId) {
    return api.post(endpoints.like, {
        theaterId
    });
};

export async function getLikes(theaterId) {
    return api.get(endpoints.likesByGameID + encodeURIComponent(`theaterId="${theaterId}"`))
};

export async function hasLiked(theaterId, user) {
    if (!user) {
        return false
    } else {
        const userId = user._id
        const likes = await api.get(endpoints.ownLike + encodeURIComponent(`theaterId="${theaterId}" AND _ownerId="${userId}"`))
        console.log(likes);
        return likes[0] || false
    }
};