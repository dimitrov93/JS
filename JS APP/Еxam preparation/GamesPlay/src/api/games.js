import * as api from '../api/api.js';

const pageSize = 3;

const endpoints = {

    'games': '/data/games?sortBy=_createdOn%20desc&distinct=category',
    getAll:  (page) => `/data/games?sortBy=_createdOn%20desc&offset=${(page - 1) * pageSize}&pageSize=${pageSize}`,
    count: '/data/games?count',
    'gameId': '/data/games/',
    'create': '/data/games',
    'delete': '/data/games/',
    'create': '/data/games/',
    'edit': '/data/games/',
    'like': '/data/likes',
    likesByGameID: '/data/likes?count&distinct=_ownerId&where=',
    ownLike: '/data/likes?&where=',
    disLike: '/data/likes/',
    search: '/data/games?where='
}

//search
export async function searchGames(param) {
    return api.get(endpoints.search + encodeURIComponent(`title LIKE "${param}"`));
};

//profile
export async function getMyGames(userId) {
    return api.get('/data/games?where=' + encodeURIComponent(`_ownerId="${userId}"`));
};

export async function getGames() {
    return api.get(endpoints.games);
};

export async function getAll(page) {
    return api.get(endpoints.getAll(page));
};

export async function getCount() {
    const count = await api.get(endpoints.count);
    return Math.ceil(count / pageSize)
};

export async function getGameId(id) {
    return api.get(endpoints.gameId + id);
};


export async function create(data) {
    return api.post(endpoints.create, data);
};

export async function del(id) {
    return api.del(endpoints.delete + id);
};

export async function edit(id, data) {
    return api.put(endpoints.edit + id , data);
};

export async function likeGame(gameId) {
    return api.post(endpoints.like, {
        gameId
    });
};

export async function getLikes(gameId) {
    return api.get(endpoints.likesByGameID + encodeURIComponent(`gameId="${gameId}"`))
};

export async function hasLiked(gameId, user) {
    if (!user) {
        return false
    } else {
        const userId = user._id
        const likes = await api.get(endpoints.ownLike + encodeURIComponent(`gameId="${gameId}" AND _ownerId="${userId}"`))
        return likes[0] || false
    }
};

export async function dislikeGame(likeId) {
    console.log(likeId);
    return api.del(endpoints.disLike + likeId)
};