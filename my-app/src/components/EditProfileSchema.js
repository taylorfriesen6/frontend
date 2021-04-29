import * as yup from 'yup'

const EditProfileSchema = yup.object().shape({
    email: yup.string()
    .email().required("Valid email is required"),
    password: yup.string()
    .required('Password is required'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export default EditProfileSchema