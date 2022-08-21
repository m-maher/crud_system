import axios from "axios";
export const TOKENKEY = "Token";

export function getUserToken() {
  return localStorage.getItem(TOKENKEY);
}

export function login({ email, password }) {
  return axios
    .post(`${process.env.VUE_APP_URL}/login`, {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.status == 200) {
        if (res.data.token != null) {
          localStorage.setItem(TOKENKEY, res.data.token);
          return res.data.token;
        }
      } else {
        alert("invalid login");
      }
    });
}
