import {
    LOGIN_USER_FAIL,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    USER_LOGOUT
  } from "../consts";
  
  import axios from "axios";

  
  const urlBase = "https://water-my-plants-tt14.herokuapp.com/"

  export const signupUser = (user) => (dispatch) => {
    dispatch({ type: REGISTER_USER_START });
    axios
      .post(`${urlBase}api/auth/register`, user)
      .then((res) => {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_USER_FAIL,
          payload: err.response.data.message,
        });
      });
  };
  
  
  export const loginUser = (payload) => (dispatch) => {
    dispatch({ type: LOGIN_USER_START });


  
    axios
      .post(`${urlBase}api/auth/login`, payload)
      .then((res) => {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch({ type: LOGIN_USER_FAIL, payload: err.response.data.message })
      );
  };
  
  
  export const userLogout = () => dispatch => {
    dispatch( {
      type: USER_LOGOUT
    })
  }