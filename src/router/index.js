import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import ScrumPoker from "../components/ScrumPoker.vue";

const routes = [
  { path: "/", name: "ScrumPoker", component: ScrumPoker },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;