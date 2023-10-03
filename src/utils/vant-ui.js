import Vue from "vue";
import { Button } from "vant";
import { Tabbar, TabbarItem } from "vant";

const Vant = [Button, Tabbar, TabbarItem];

Vant.forEach((item) => Vue.use(item));

export default Vant;
