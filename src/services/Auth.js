// authService.js
import axios from 'axios';
import { API } from '../config/config';

/**
 * Handles login API request
 * @param {string} username - The username of the user
 * @param {string} password - The password of the user
 * @returns {Promise} - Axios promise for login API request
 */
export const loginUser = async (email, password) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/login', // Make sure this URL is correct
        { username: email, password: password },
        {
          headers: {
            'Content-Type': 'application/json', // Ensure correct content type
          },
        }
      );
      return response.data; // Return the response data
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };