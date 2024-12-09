// config.js
const BASE_URL = "http://localhost:8080/api/v1";

export const API = {
  LOGIN: `${BASE_URL}/login`,
  
  // User Profile Endpoints
  USER_PROFILE: `${BASE_URL}/user-profile`,
  GET_ALL_USERS: `${BASE_URL}/user-profile`,
  EDIT_USER: `${BASE_URL}/user-profile`,
  DELETE_USER: `${BASE_URL}/user-profile`,
  
  // Role Endpoints
  ROLE: `${BASE_URL}/roles`,
  GET_ALL_ROLES: `${BASE_URL}/roles`,
  ADD_ROLE: `${BASE_URL}/roles`,
  EDIT_ROLE: `${BASE_URL}/roles`,
  DELETE_ROLE: `${BASE_URL}/roles`,

  // Permission Endpoints
  PERMISSION: `${BASE_URL}/permissions`,
  GET_ALL_PERMISSIONS: `${BASE_URL}/permissions`,
  ADD_PERMISSION: `${BASE_URL}/permissions`,
  EDIT_PERMISSION: `${BASE_URL}/permissions`,
  DELETE_PERMISSION: `${BASE_URL}/permissions`,

  // Car Model Endpoints
  CAR_MODEL: `${BASE_URL}/car-models`,
  GET_ALL_CAR_MODELS: `${BASE_URL}/car-models`,
  ADD_CAR_MODEL: `${BASE_URL}/car-models`,
  EDIT_CAR_MODEL: `${BASE_URL}/car-models`,
  DELETE_CAR_MODEL: `${BASE_URL}/car-models`,

  // Car Maker Endpoints
  CAR_MAKER: `${BASE_URL}/car-makers`,
  GET_ALL_CAR_MAKERS: `${BASE_URL}/car-makers`,
  ADD_CAR_MAKER: `${BASE_URL}/car-makers`,
  EDIT_CAR_MAKER: `${BASE_URL}/car-makers`,
  DELETE_CAR_MAKER: `${BASE_URL}/car-makers`,

  // Parts Endpoints
  PARTS: `${BASE_URL}/parts`,
  GET_ALL_PARTS: `${BASE_URL}/parts`,
  ADD_PART: `${BASE_URL}/parts`,
  EDIT_PART: `${BASE_URL}/parts`,
  DELETE_PART: `${BASE_URL}/parts`,
  
};
