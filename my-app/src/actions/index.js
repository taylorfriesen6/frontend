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
  import { useHistory } from "react-router-dom";
  
  const urlBase = "http://localhost:5000/api"

  export const signupUser = (user) => (dispatch) => {
    dispatch({ type: REGISTER_USER_START });
    axios
      .post(`${urlBase}/login`, user)
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
      .post(`${urlBase}/login`, payload)
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