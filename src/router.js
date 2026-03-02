import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import Curriculum from "./views/Curriculum.vue";
import Contact from "./views/Contact.vue";

async function setupRouter() {
  const routes = [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: { title: "Início" },
    },
    {
      path: "/curriculum",
      name: "curriculum",
      component: Curriculum,
      meta: { title: "Currículo" },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: { title: "Contato" },
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  return router;
}

export default setupRouter;
