import Vue from "vue";
import { Button } from "vant";
import { Tabbar, TabbarItem, NavBar } from "vant";

const Vant = [Button, Tabbar, TabbarItem, NavBar];

Vant.forEach((item) => Vue.use(item));

export default Vant;
