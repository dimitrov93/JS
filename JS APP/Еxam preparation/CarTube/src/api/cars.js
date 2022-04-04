import * as api from '../api/api.js';
import { clearUserData, setUserData } from '../util.js';

const endpoints = {
    'allCars': '/data/cars?sortBy=_createdOn%20desc',
    'carById': '/data/cars/',
    'edit': '/data/cars/',
    'delete': '/data/cars/',
    'create': '/data/cars',
}

export async function getCars() {
    return api.get(endpoints.allCars);
};


export async function getCarById(id) {
    return api.get(endpoints.carById + id);
};

export async function editCar(id, data) {
    return api.put(endpoints.edit + id, data);
};

export async function deleteCar(id) {
    return api.del(endpoints.edit + id);
};

export async function createCar(data) {
    return api.post(endpoints.create, data)
}

export async function getMyCars(userId) {
    return api.get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function searchCars(searchText) {
    // const query = encodeURIComponent(`name like "${searchText}"`)
    return api.get(`/data/cars?where=year%3D${searchText}`)
}


//