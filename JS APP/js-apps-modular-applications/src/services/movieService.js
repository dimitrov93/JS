const baseUrl = 'http://localhost:3030/data/movies';

export const getAll = (search) => {
    let querystring = '';

    if (search) {
        querystring = '?where=' + encodeURIComponent(`title LIKE "${search}"`);
    }
    
    return fetch(baseUrl + querystring)
    .then(res => res.json())
};
export const getOne = (albumID) => fetch(`${baseUrl}/data/albums/${albumID}`).then(res => res.json());