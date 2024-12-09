import axios from 'axios';
import { API } from '../config/config';

/**
 * Fetches user details from the server by user ID
 * @param {string} userId - The ID of the user
 * @param {string} token - The access token for authentication
 * @returns {Promise<object>} - The user details
 */
export const fetchUserDetails = async (userId, token) => {
  try {
    const response = await axios.get(`${API.USER_PROFILE}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

/**
 * Fetches all users from the server
 * @param {string} token - The access token for authentication
 * @returns {Promise<Array>} - A list of all users
 */
export const fetchAllUsers = async (token) => {
  try {
    const response = await axios.get(`${API.USER_PROFILE}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw error;
  }
};

/**
 * Edits a single user's details on the server
 * @param {string} userId - The ID of the user to be edited
 * @param {object} userData - The updated user data
 * @param {string} token - The access token for authentication
 * @returns {Promise<object>} - The updated user details
 */
export const editUser = async (userId, userData, token) => {
  try {
    const response = await axios.put(`${API.USER_PROFILE}/${userId}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error editing user:', error);
    throw error;
  }
};

/**
 * Deletes a user from the server by user ID
 * @param {string} userId - The ID of the user to be deleted
 * @param {string} token - The access token for authentication
 * @returns {Promise} - A promise indicating the result of the deletion
 */
export const deleteUser = async (userId, token) => {
  try {
    await axios.delete(`${API.USER_PROFILE}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('User deleted successfully');
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

/**
 * Adds a new user to the server
 * @param {object} userData - The data for the new user
 * @param {string} token - The access token for authentication
 * @returns {Promise<object>} - The newly added user details
 */
export const addUser = async (userData, token) => {
  try {
    const response = await axios.post(`${API.USER_PROFILE}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};