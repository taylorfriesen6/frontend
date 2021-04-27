import React from "react";
import styled from "styled-components";

const StyledSignUpForm = styled.form`
  position: absolute;
  width: 570px;
  height: 589px;
  left: 435px;
  top: 265px;

  background: #FFFFFF;
  box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
  `;


export default function SignUpForm({
  values,
  change,
  submit,
  errors,
}) {
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };
  return (
    <StyledSignUpForm className="signupformcontainer" onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      <div>

        <label>
          First Name
          <input
            value={values.firstname}
            onChange={onChange}
            name="firstname"
            type="text"
          />
        </label>
        <p>{errors.firstname}</p>

        <label>
          Last Name
          <input
            value={values.lastname}
            onChange={onChange}
            name="lastname"
            type="text"
          />
        </label>
        <p>{errors.lastname}</p>

        <label>
          Phone Number
          <input
            value={values.phone}
            onChange={onChange}
            name="phone"
            type="text"
          />
        </label>
        <p>{errors.phone}</p>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>
        <p>{errors.email}</p>

        <label>
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>
        <p>{errors.password}</p>

        <label>
          Confirm Password
          <input
            value={values.confirmPassword}
            onChange={onChange}
            name="confirmPassword"
            type="password"
          />
        </label>
        <p>{errors.password}</p>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    </StyledSignUpForm>
  );
}
