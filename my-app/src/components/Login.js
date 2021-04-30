import * as yup from "yup";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import LoginSchema from "./LoginSchema";
import axios from "axios";

const initialFormValues = {
  email: "",
  password: "",
};
const initialFormErrors = {
  email: "",
  password: "",
};

const Login = (props) => {
  const history = useHistory();
  const [loginValues, setLoginValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    LoginSchema.isValid(loginValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [loginValues]);

  const handleChanges = (e) => {
    yup
      .reach(LoginSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [e.target.name]: err.errors[0],
        });
      });
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://water--my--plants.herokuapp.com/login",
        `grant_type=password&username=${loginValues.email}&password=${loginValues.password}`,
				{
					headers: {
						// btoa is converting our client id/client secret into base64
						Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
						"Content-Type": "application/x-www-form-urlencoded",
					},
				},
      )
      .then((res) => {
        console.log("login resp", res, res.data);
        //setLoginValues(initialFormValues)
        localStorage.setItem("token", res.data.access_token);
        // localStorage.setItem("userId", res.data.user.user_id )
        history.push("/collection");
      })
      .catch((error) => console.log({ error }));
    console.log();
  };

  return (
    <StyledLogin>
      <StyledLoginForm className="loginformcontainer" onSubmit={submitForm}>
        <h2>Login</h2>
        <div>
          <label>
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={loginValues.email}
              onChange={handleChanges}
            />
          </label>

          <ErrorMessage>{formErrors.email}</ErrorMessage>

          <label>
            <input
              name="password"
              placeholder="Password"
              type="password"
              value={loginValues.password}
              onChange={handleChanges}
            />
          </label>
        </div>
        <button disabled={disabled} type="submit">
          Log In
        </button>

        {/* {formErrors && <div style={{ color: "red" }}>{formErrors}</div>} */}
      </StyledLoginForm>
    </StyledLogin>
  );
};

//styling for loginform
const StyledLogin = styled.div`
  background: #e5e5e5;
`;
const StyledLoginForm = styled.form`
  position: absolute;
  width: 570px;
  height: 305px;
  left: 435px;
  top: 265px;
  padding: 40px;
  background: #ffffff;
  box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
  h2 {
    width: 490px;
    height: 37px;
    left: 475px;
    top: 305px;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 37px;
    color: #224229;
  }
  p {
    width: 100%;
    height: 23px;
    left: 475px;
    top: 362px;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 23px;
    color: #224229;
    border-bottom: 3px solid green;
  }
  button {
    width: 232px;
    height: 54px;
    left: 475px;
    top: 476px;
    margin-top: 20px;
    background: #548a60;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    color: white;
    font-size: 17px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
  }
  & h4 {
    width: 500px;
    margin-top: 9px;
  }
  & .btn-login {
    display: flex;
    margin-top: 40px;
    width: 245px;
    height: 16px;
    left: 720px;
    top: 510px;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #b1b7b3;
  }
  & .bottom {
    display: flex;
    justify-content: center;
  }
  & .login {
    background: none;
    border: none;
    padding-bottom: 80px;
    margin-top: 10px;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #b1b7b3;
    &:hover {
      color: blue;
    }
  }

  span {
    color: ${(pr) => pr.theme.errorColor};
    white-space: ${(pr) => pr.theme.whiteSpace};
  }
`;

const ErrorMessage = styled.p`
  font-family: PT Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 15px;
  color: red;
`;
export default Login;
