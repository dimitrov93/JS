import * as api from './api.js';
import { clearUserData, setUserData } from '../util.js';

const endpoints = {
    'create': '/data/memes',
    'all': '/data/memes?sortBy=_createdOn%20desc',
    'details': '/data/memes/',
    'delete': '/data/memes/',
    'edit': '/data/memes/'
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
    return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function searchCars(searchText) {
    // const query = encodeURIComponent(`name like "${searchText}"`)
    return api.get(`/data/cars?where=year%3D${searchText}`)
}


//