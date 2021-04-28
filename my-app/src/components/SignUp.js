import * as yup from "yup";
import React, { useEffect, useState } from "react";
import SignUpSchema from "./SignUpSchema";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components'


const initialFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  
  phone:"",
};

const initialFormErrors = {
  
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  number:"",
};


const SignUp = () => {

  const history = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if(formValues.password === formValues.confirmPassword) {
      SignUpSchema.isValid(formValues).then(valid => setDisabled(!valid))
    } else {
      setDisabled(true)
    }
  }, [formValues])
 
  const handleChanges = e => {
    yup.reach(SignUpSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [e.target.name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [e.target.name]: err.errors[0]
        })
      })
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
      })
  }

  const submitForm = (e) => {
    e.preventDefault()
    const data = {name: formValues.name, email: formValues.email, password: formValues.password, phone: formValues.phone,}
    axios
    .post("https://water-my-plants-tt14.herokuapp.com/api/auth/register", data)
    .then((resObj) => {
      console.log("signup res", resObj)
      history.push("/")
      //route to plant collection
    })
    .catch(err => console.log({err}))
  }

  return (
    <div className="signup">
    <StyledSignUpForm className="signupformcontainer" onSubmit={submitForm}>
      <h2>Sign Up</h2>
      <div>

        <label>
          Name
          <input
            name="name"
            placeholder="name"
            type="text"
            value={formValues.name}
            onChange={handleChanges}
          />
        </label>
        <p>{formErrors.name}</p>

        <label>
          Phone Number
          <input
            name="phone"
            placeholder="phone number"
            type="text"
            value={formValues.phone}
            onChange={handleChanges}
          />
        </label>
        <p>{formErrors.phone}</p>

        <label>
          Email
          <input
            name="email"
            placeholder="email@email.com"
            type="text"
            value={formValues.email}
            onChange={handleChanges}
          />
        </label>
        <p>{formErrors.email}</p>

        <label>
          Password
          <input
            name="password"
            placeholder="password"
            type="password"
            value={formValues.password}
            onChange={handleChanges}
          />
        </label>
        <p>{formErrors.password}</p>

        <label>
          Confirm Password
          <input
            name="confirmPassword"
            placeholder="confirm password"
            type="password"
            value={formValues.confirmPassword}
            onChange={handleChanges}
          />
        </label>
        <p>{formErrors.confirmPassword}</p>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </StyledSignUpForm>
    </div>
  );
}

const StyledSignUpForm = styled.form`
  position: absolute;
  width: 570px;
  height: 589px;
  left: 435px;
  top: 265px;

  background: #FFFFFF;
  box-shadow: 0px 30px 60px -40px rgba(130, 70, 0, 0.5);
  `;


export default SignUp;