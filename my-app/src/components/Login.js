import * as yup from "yup";

import React, { useEffect, useState } from "react";
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import LoginForm from "./LoginForm";
import LoginSchema from "./LoginSchema";
import { connect } from "react-redux";
import { loginUser } from "../actions";



const StyledLogin = styled.div`
  background: #E5E5E5;


`

const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;


const Login = (props) => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(LoginSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const loginSubmit = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };

    props.history.push("/collection")

    props.loginUser(loginSubmit);
    
  };

  useEffect(() => {
    LoginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <StyledLogin className="login">
      
      <div>
      <LoginForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {props.error && <div style={{ color: "red" }}>{props.error}</div>}
      </div>
    </StyledLogin>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return {
    error: userReducer.error,
  };
};

export default connect(mapStateToProps, { loginUser })(Login);