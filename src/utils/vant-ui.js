import Vue from "vue";
import { Button } from "vant";

const Vant = [Button];
Vant.forEach((item) => Vue.use(item));

export default Vant;
