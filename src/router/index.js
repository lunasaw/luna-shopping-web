import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/views/404/NotFound.vue";
import PageError from "@/views/500/PageError.vue";
import Login from "@/views/login";
import Layout from "@/views/layout";
import Search from "@/views/search";
import SearchList from "@/views/search/list";
import Pay from "@/views/pay";
import MyOrder from "@/views/myorder";

import Home from "@/views/layout/home";
import Category from "@/views/layout/category";
import Cart from "@/views/layout/cart";
import User from "@/views/layout/user";

import store from "@/store";
Vue.use(VueRouter);

const routes = [
  { name: "login", path: "/login", component: Login },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      { path: "/home", component: Home },
      { path: "/category", component: Category },
      { path: "/cart", component: Cart },
      { path: "/user", component: User },
    ],
  },
  { path: "/search", component: Search },
  { path: "/searchlist", component: SearchList },
  // 动态路由传参，确认将来是哪个商品，路由参数中携带 id
  // { path: "/prodetail/:id", component: ProDetail },
  { path: "/pay", component: Pay },
  { path: "/myorder", component: MyOrder },
];

const pageRoutes = [
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
routes.push(...pageRoutes);

const router = new VueRouter({
  routes,
});

const authUrl = ["/pay", "/myorder"];
router.beforeEach((to, from, next) => {
  const token = store.getters.token;
  if (!authUrl.includes(to.path)) {
    next();
    return;
  }

  if (token) {
    next();
  } else {
    next("/login");
  }
});
export default router;
