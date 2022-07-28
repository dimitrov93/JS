import * as request from "./requester";

const baseUrl = "http://localhost:3030/users";

export const login = (email, password) =>
  request.post(`${baseUrl}/login`, { email, password });

export const logout = (accessToken) =>
  fetch(`${baseUrl}/logout`, { 
        headers: {
            'X-Authorization': accessToken
        }
   });
