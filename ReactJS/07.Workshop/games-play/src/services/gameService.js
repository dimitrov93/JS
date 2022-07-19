const baseUrl = 'http://localhost:3030';


export const getAll = () => {
    return fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc&distinct=category`)
        .then(res => res.json())
   
}