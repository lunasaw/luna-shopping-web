import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFound from "@/views/404/NotFound.vue";
import PageError from "@/views/500/PageError.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/error",
    name: "500",
    component: PageError,
  },
  {
    path: "/*",
    name: "404",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
