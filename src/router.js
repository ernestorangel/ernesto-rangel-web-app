import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';
import About from './views/About.vue';
import Curriculum from './views/Curriculum.vue';
import Portfolio from './views/Portfolio.vue';
import Contact from './views/Contact.vue';

async function setupRouter() {
  const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/curriculum', component: Curriculum },
    { path: '/portfolio', component: Portfolio },
    { path: '/contact', component: Contact },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      omponent: NotFound,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  return router;
}

export default setupRouter;
