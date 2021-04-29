import * as yup from "yup";
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import EditProfileSchema from "./EditProfileSchema";
import axios from 'axios'

const initialFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  
  const initialFormErrors = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  
  
  
const EditProfile = (props) => {
  
    const history = useHistory()
  
    const [profileValues, setProfileValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(true)
  

    const { push } = useHistory()
    
  
    const handleChanges = e => {
      yup.reach(EditProfileSchema, e.target.name)
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
        setProfileValues({
          ...profileValues,
          [e.target.name]: e.target.value
        })
    }
    const submitForm = (e) => {
      e.preventDefault()
      axios
      .post("https://water-my-plants-tt14.herokuapp.com/api/auth/login", profileValues)
      .then((res) => {
        console.log("resp", res, res.data)
        localStorage.setItem("token", res.data.token)
        history.push("/")
        })
      .catch(error => console.log({error}))
    }

return(
    <form onSubmit={submitForm}>
      <h2>Profile</h2>
      <div>
        <p>
        <h3>Change Email</h3>
          <label>
            <input
              name="email"
              placeholder="New Email"
              type="email"
              value={profileValues.email}
              onChange={handleChanges}
            />
          </label>
          <p>{formErrors.email}</p>
        </p>
        <p>
        <h3>Change Password</h3>
          <label>
            <input
              name="password"
              placeholder="New Password"
              type="password"
              value={profileValues.password}
              onChange={handleChanges}
            />
          </label>
          <p>{formErrors.password}</p>
          <label>
            <input
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              value={profileValues.confirmPassword}
              onChange={handleChanges}
            />
          </label>
          <p>{formErrors.confirmPassword}</p>
        </p>
      </div>
      <div>
        <button type="submit">Save Changes</button>
      </div>
      </form>
)
}

export default EditProfile;