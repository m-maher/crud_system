import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";
import Login from "../views/Login/Login.vue";
import Home from "../views/Home/Home.vue";

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = store.getters.getLoginToken;
  console.log(isAuthenticated);
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else if (to.name == "Login" && isAuthenticated) next({ name: "Home" });
  else next();
});

export default router;
