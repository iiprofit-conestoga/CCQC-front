import axios from 'axios';

/**
 * A generic function to make API calls for CRUD operations.
 * @param {string} method - The HTTP method (GET, POST, PUT, DELETE)
 * @param {string} url - The URL endpoint for the API call
 * @param {object} data - The request payload for POST/PUT methods (optional)
 * @param {string} token - The access token for authentication
 * @returns {Promise<object>} - The response data from the server
 */
const apiCall = async (method, url, data = null, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios({
      method: method,
      url: url,
      data: data,
      headers: headers,
    });

    return response.data;
  } catch (error) {
    console.error(`Error with ${method} request to ${url}:`, error);
    throw error;
  }
};

/**
 * Fetches a resource from the server.
 * @param {string} url - The API endpoint
 * @param {string} token - The access token
 * @returns {Promise<object>} - The fetched data
 */
export const fetchData = async (url, token) => {
    let Result = await apiCall('GET', url, null, token);
  return Result;
};

/**
 * Adds a new resource to the server.
 * @param {string} url - The API endpoint
 * @param {object} data - The data to be added
 * @param {string} token - The access token
 * @returns {Promise<object>} - The created resource
 */
export const addData = async (url, data, token) => {
  return apiCall('POST', url, data, token);
};

/**
 * Edits an existing resource on the server.
 * @param {string} url - The API endpoint
 * @param {string} id - The ID of the resource to be edited
 * @param {object} data - The updated data
 * @param {string} token - The access token
 * @returns {Promise<object>} - The updated resource
 */
export const editData = async (url, id, data, token) => {
  return apiCall('PUT', `${url}/${id}`, data, token);
};

/**
 * Edits an existing resource on the server.
 * @param {string} url - The API endpoint
 * @param {string} id - The ID of the resource to be edited
 * @param {object} data - The updated data
 * @param {string} token - The access token
 * @returns {Promise<object>} - The updated resource
 */
export const fetchSingleData = async (url, id, data, token) => {
    return apiCall('GET', `${url}/${id}`, data, token);
  };

/**
 * Deletes a resource from the server.
 * @param {string} url - The API endpoint
 * @param {string} id - The ID of the resource to be deleted
 * @param {string} token - The access token
 * @returns {Promise} - The result of the deletion
 */
export const deleteData = async (url, id, token) => {
  return apiCall('DELETE', `${url}/${id}`, null, token);
};