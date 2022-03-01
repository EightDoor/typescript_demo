import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/index.vue";
import MoreVModel from "../views/more_vmodel/index.vue";
import Slot from "../views/slot/index.vue";
import ProvideInject from "../views/provide_inject/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/more_vmodel",
    component: MoreVModel,
  },
  {
    path: "/slot",
    component: Slot,
  },
  {
    path: "/provide_inject",
    component: ProvideInject,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
