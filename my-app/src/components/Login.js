import * as yup from "yup";

import React, { useEffect, useState } from "react";
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import LoginForm from "./LoginForm";
import LoginSchema from "./LoginSchema";
import { connect } from "react-redux";
import { loginUser } from "../actions";


//styling for Login function
const StyledLogin = styled.div`
  background-color: ${pr => pr.theme.lightestColor};


`
const StyledLink =styled.div `
    color: ${pr => pr.theme.fontColor};
    white-space: ${pr => pr.theme.whiteSpace};
    background-color: ${pr => pr.theme.lightestColor};

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

    props.history.push("/dashboard")

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

      <StyledLink>
        {props.error && <div style={{ color: "red" }}>{props.error}</div>}
        <Link to="/">no log in thx</Link>
      </StyledLink>
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