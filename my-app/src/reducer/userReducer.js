import {
    LOGIN_USER_FAIL,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    USER_LOGOUT
  } from "../consts/index";
  
  
  const initialState = {
    user: {
      user_id: "",
      username: "",
    },
    error: "",
    isLoading: "",
    isRegistered: false,
    isLoggedIn: false,
  };
  
  export const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case REGISTER_USER_START:
        return {
          ...state,
          error: "",
          isLoading: true,
        };
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isLoading: false,
          isRegistered: true,
        };
      case REGISTER_USER_FAIL:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      case LOGIN_USER_START:
        return {
          ...state,
          error: "",
          isLoading: true,
        };
      case LOGIN_USER_SUCCESS:
        localStorage.setItem("token", action.payload.token);
        return {
          ...state,
          user: action.payload.user,
          isLoading: false,
          isLoggedIn: true
        };
      case LOGIN_USER_FAIL:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      case USER_LOGOUT:
        localStorage.removeItem("token")
        return{
          ...state,
          isLoggedIn: false
        }
      default:
        return state;
    }
  };
  