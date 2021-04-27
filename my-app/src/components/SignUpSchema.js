import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Must be 3 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Must be 7 characters"),
  confirmPassword: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match'),
  phone: yup
  .string()
  .required("Phone Number is required")
  .min(10, "Must be 10 digits"),
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().email().required("Valid email is required"),
});

export default SignUpSchema;