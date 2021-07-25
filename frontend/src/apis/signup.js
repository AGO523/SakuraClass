import axios from 'axios';
import { signup } from '../urls/index'
import client from "../api/client"
import Cookies from "js-cookie"

import { SignUpParams, SignInParams } from "interfaces/index"

// サインアップ（新規アカウント作成）
export const fetchSignup = (params) => {
  return axios.post(signup)
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e))
}
