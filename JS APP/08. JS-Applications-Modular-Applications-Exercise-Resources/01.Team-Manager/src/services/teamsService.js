const baseUrl = 'http://localhost:3030/data/teams';

export const getAll = () => {
    return fetch(baseUrl)
            .then(res => res.json())
}

export const getAllMembers = () => {
    return fetch(`${baseUrl}/data/members?where=status%3D%22member%22`)
            .then(res => res.json())
}
