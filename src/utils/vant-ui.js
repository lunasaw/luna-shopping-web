import Vue from "vue";
import { Button } from "vant";
import { Tabbar, TabbarItem, NavBar } from "vant";
import { Toast } from "vant";
import { Search, Swipe, SwipeItem, Grid, GridItem } from "vant";
import { Icon } from "vant";
import { Lazyload } from "vant";
import { Rate } from "vant";
const Vant = [
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Toast,
  Search,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Icon,
  Lazyload,
  Rate,
];

Vant.forEach((item) => Vue.use(item));

export default Vant;
