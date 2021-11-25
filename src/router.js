import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Shopping from "./views/Shopping.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/shopping",
      name: "shopping",
      component: Shopping
    }
  ]
});
