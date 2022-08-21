import { createStore } from "vuex";
import LoginModule from "./modules/Login/index";

export default createStore({
  modules: {
    LoginModule,
  },
});
