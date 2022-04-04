const baseUrl = 'http://localhost:3030';


export const getAlbums = () => {
    return fetch(`${baseUrl}/data/albums?sortBy=_createdOn%20desc&distinct=name`)
    .then(res => res.json())
}

export const createAlbum = (data) => {
    let accessToken = localStorage.getItem('accessToken');
    return fetch(`${baseUrl}/data/albums`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })
    
        .then(res =>  res.json())
}


export const getOne = (albumId) => fetch(`${baseUrl}/data/albums/${albumId}`).then(res => res.json());
export const edit = (albumId, data) => {
    let accessToken = localStorage.getItem('accessToken');

    return fetch(`${baseUrl}/data/albums/${albumId}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })

        .then(res =>  res.json())
}

export const remove = (albumId) => {
    let accessToken = localStorage.getItem('accessToken');

    return fetch(`${baseUrl}/data/albums/${albumId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': accessToken
        },
        body: JSON.stringify(null)
      })
      .then(res =>  res.json())

}

// post
export const search = (searchText) => {
    const query = encodeURIComponent(`name like "${searchText}"`)

    return fetch(`${baseUrl}/data/albums?where=${query}`)
        .then(res => res.json())
}