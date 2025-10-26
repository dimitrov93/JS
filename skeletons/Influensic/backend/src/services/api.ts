import axios from "axios";

/**
 * fetchAPI
 * @param {string} path The path of the api that you want to fetch
 * @param {string=} method The method of the request e.g. POST, GET, PUT
 * @param {Object=} headers The headers object of the request
 * @param {any=} body The request body
 * @returns Promise<any>
 * @description Method to fetch the backend
 */
export const fetchAPI = async (
  path: string,
  method?: string,
  body?: any,
  headers?: any
): Promise<any> => {
  try {
    const response = await axios(
      `http://${process.env.HOST}:${process.env.PORT}/${path}`,
      {
        method,
        data: body,
        headers: {
          "Content-Type": "multipart/form-data",
          ...headers,
        },
      }
    );

    return response.data;
  } catch (err: any) {
    console.log(err);
  }
};
