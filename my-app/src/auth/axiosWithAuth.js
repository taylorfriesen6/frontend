import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  console.log('definitely not a token', token)

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: 'https://water-my-plants-tt14.herokuapp.com/'
  })
}
