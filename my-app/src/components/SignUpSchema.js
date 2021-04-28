import * as yup from "yup";

const SignUpSchema = yup.object().shape({
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
  name: yup.string().required("Your Name is required"),
  email: yup.string().email().required("Valid email is required"),
});

export default SignUpSchema;