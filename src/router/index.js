import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "@/views/DashboardView.vue";
import GridSystem from "@/views/GridSystemView.vue";
import GridListPage from "@/views/GridListPageView.vue";
import Breakpoints from "@/views/BreakpointsView.vue";
import Typhography from "@/views/TyphographyView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/grid-system",
    name: "GridSystem",
    component: GridSystem,
  },
  {
    path: "/grid-list-page",
    name: "GridListPage",
    component: GridListPage,
  },
  {
    path: "/break-points",
    name: "Breakpoints",
    component: Breakpoints,
  },
  {
    path: "/typhography",
    name: "Typhography",
    component: Typhography,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
