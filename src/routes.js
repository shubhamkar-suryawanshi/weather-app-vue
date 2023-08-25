import { createWebHistory, createRouter } from "vue-router";
import Weather from "./components/Weather.vue";
import CityDetails from "./components/CityDetails.vue";

const routes = [
  {
    name: "Weather",
    path: "/",
    component: Weather,
  },
  {
    name: "City Details",
    path: "/city",
    component: CityDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
