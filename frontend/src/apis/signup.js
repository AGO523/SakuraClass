import axios from 'axios';
import { signup } from '../urls/index'
// import Cookies from "js-cookie"

// サインアップ（新規アカウント作成）
export const fetchSignup = (params) => {
  return axios.post(signup, { params })
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e))
}
