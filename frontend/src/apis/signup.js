import axios from 'axios';
import { signup } from '../urls/index'
// import Cookies from "js-cookie"

// サインアップ（新規アカウント作成）
export const fetchSignup = (params) => {
  return axios.post(signup, { params })
    .then(res => {
      console.log(res)
    })
    .catch((e) => console.error(e))
}

// // サインアウト（ログアウト）
// export const signOut = () => {
//   return client.delete("auth/sign_out", { headers: {
//     "access-token": Cookies.get("_access_token"),
//     "client": Cookies.get("_client"),
//     "uid": Cookies.get("_uid")
//   }})  
// }

// // 認証済みのユーザーを取得
// export const getCurrentUser = () => {
//   if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
//   return client.get("/auth/sessions", { headers: {
//     "access-token": Cookies.get("_access_token"),
//     "client": Cookies.get("_client"),
//     "uid": Cookies.get("_uid")
//   }})
// }
