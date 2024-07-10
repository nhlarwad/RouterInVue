// Defining our Routing rules here//

import { createRouter, createWebHistory } from "vue-router";
import NotFoundView from "../views/404View.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import ContactView from "../views/ContactView.vue";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },

    {
      path: "/project",
      name: "project",
      component: ProjectView,
    },
    {
      path: "/cars/:id",
      name: "car",
      component: CarView,
      children: [
        {
          path: "contact",
          component: ContactView,
        },
      ],
    },
    {
      path: "/:catchall(.*)*",
      name: "Not found",
      component: NotFoundView,
    },
  ],
});

export default router;
