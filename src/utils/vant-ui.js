import Vue from "vue";
import { Button } from "vant";
import { Tabbar, TabbarItem, NavBar } from "vant";
import { Toast } from "vant";

const Vant = [Button, Tabbar, TabbarItem, NavBar, Toast];

Vant.forEach((item) => Vue.use(item));

export default Vant;
