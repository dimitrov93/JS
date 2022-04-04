import * as api from './api.js';
import { clearUserData, setUserData } from '../util.js';

const endpoints = {
    'create': '/data/pets',
    'all': '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    'details': '/data/pets/',
    'delete': '/data/pets/',
    'edit': '/data/pets/',
    'clickDonate': '/data/donation'
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

export async function clickDonate(petId) {
    return api.post(endpoints.clickDonate, {petId})
}

export async function allDonates(petId) {
    return api.get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`)
}

export async function userDonation(petId, userId) {
    if (!userId) {
        return false
    } else { 
        return api.get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
    }
}