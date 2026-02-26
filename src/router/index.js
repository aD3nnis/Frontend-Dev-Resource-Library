import { createRouter, createWebHistory } from 'vue-router';
import SiteContainer from '@/SiteContainer.vue';
import HowIBuiltIt from '@/components/HowIBuiltIt.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: SiteContainer,
  },
  {
    path: '/how-i-built-it',
    name: 'how-i-built-it',
    component: HowIBuiltIt,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

