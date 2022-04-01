import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

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
    path: "/introduction",
    name: "introduction",
    component: () => import("../views/IntroductionView.vue"),
  },
  {
    path: "/ageError",
    name: "ageError",
    component: () => import("../views/AgeError.vue"),
  },
  {
    path: "/summary",
    name: "summary",
    component: () => import("../views/SummaryView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
