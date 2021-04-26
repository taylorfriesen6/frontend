import React from "react";
import styled from 'styled-components'

//styling for loginform 
const StyledLoginForm = styled.form`
    color: ${pr => pr.theme.fontColor};
    font-weight: 300;
    background-color: ${pr => pr.theme.secondaryColor};
    display: ${pr => pr.theme.display};
    justify-content: ${pr => pr.theme.justifyContent};
    flex-wrap: ${pr => pr.theme.flexWrap};
    border-radius: ${pr => pr.theme.borderRadius};

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
      <h2>Member Login</h2>
      <div>
        <p>
          <label>
            Username
            <input
              value={values.username}
              onChange={onChange}
              name="username"
              type="text"
            />
          </label>
          <span className="error">{errors.username}</span>
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