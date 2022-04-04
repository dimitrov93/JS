import * as api from './api.js';
import { clearUserData, setUserData } from '../util.js';

const endpoints = {
    'create': '/data/albums',
    'all': '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    'details': '/data/albums/',
    'delete': '/data/albums/',
    'edit': '/data/albums/',}

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
    return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function search(param) {
    console.log(encodeURIComponent(`name LIKE "${param}"`));
    return api.get('/data/albums?where=' + encodeURIComponent(`name LIKE "${param}"`));
}


//