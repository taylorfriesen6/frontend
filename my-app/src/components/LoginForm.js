import React from "react";
import styled from 'styled-components'

//styling for loginform 
const StyledLoginForm = styled.form`
    position: absolute;
    width: 570px;
    height: 305px;
    left: 435px;
    top: 265px;

    background: #FFFFFF;
    box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);

    h2{
    font-family: ${pr => pr.theme.fontFamily};
    white-space: ${pr => pr.theme.whiteSpace};
    color: ${pr => pr.theme.fontColor};
    font-weight: ${pr => pr.theme.fontWeight};
    }
  input{
    }
  button{
    color: ${pr => pr.theme.fontColor};
    white-space: ${pr => pr.theme.whiteSpace};
    background-color: ${pr => pr.theme.primaryColor};
  }


span{
    color: ${pr => pr.theme.errorColor};
    white-space: ${pr => pr.theme.whiteSpace};
}
`



const LoginForm = (props) => {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <StyledLoginForm className="loginformcontainer" onSubmit={onSubmit}>
      <h2>Login</h2>
      <div>
        <p>
          <label>
            Email
            <input
              value={values.email}
              onChange={onChange}
              name="email"
              type="text"
            />
          </label>
          <span className="error">{errors.email}</span>
        </p>
        <p>
          <label>
            Password
            <input
              value={values.password}
              onChange={onChange}
              name="password"
              type="password"
            />
          </label>
          <span className="error">{errors.password}</span>

        </p>
      </div>
      <button disabled={disabled}>Log In</button>
    </StyledLoginForm>
  );
};

export default LoginForm;