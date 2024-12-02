// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Weight from "../views/WeightTracker.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/weight", name: "Weight", component: Weight },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
