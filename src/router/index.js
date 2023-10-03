import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/views/404/NotFound.vue";
import PageError from "@/views/500/PageError.vue";
Vue.use(VueRouter);

const routes = [
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
