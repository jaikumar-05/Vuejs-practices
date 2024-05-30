import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SampleView from "../views/SampleView.vue";
import ValueActive from "@/views/ValueActive.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/sample",
    name: "sample",
    component: SampleView,
  },
  {
    path: "/Value",
    name: "value",
    component: ValueActive,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
