import { getUserToken } from "../../../components/Login/auth";

const LoginModule = {
  state: {
    token: getUserToken(),
  },
  mutations: {
    setLoginToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async setLoginToken(state, token) {
      state.commit("setLoginToken", token);
    },
  },
  getters: {
    getLoginToken: (state) => {
      return state.token;
    },
  },
};

export default LoginModule;
