import axios from 'axios';
import { signup } from '../urls/index'

export const fetchSignup = () => {
  return axios.post(signup)
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e))
}
