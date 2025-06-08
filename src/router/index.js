import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import ScrumPoker from "../components/ScrumPoker.vue";
import NameSelector from "../components/NameSelector.vue";
import MemberAttendance from "../components/MemberAttendance.vue";
import Wheel from "../components/Wheel.vue";
import BettingSelector from "../components/BettingSelector.vue";
import Daily from "../components/Daily.vue";

const routes = [
  { path: "/", name: "ScrumPoker", component: ScrumPoker },
  { path: "/name-selector", name: "NameSelector", component: NameSelector },
  { path: "/member-attendance", name: "MemberAttendance", component: MemberAttendance },
  { path: "/wheel", name: "Wheel", component: Wheel },
  { path: "/daily", name: "Daily", component: Daily },
];

const router = createRouter({
  history: createWebHistory('/adsa/'),
  routes,
});

export default router;