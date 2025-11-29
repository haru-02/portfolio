import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/HomePage.vue'
import Projects from '@/pages/MyProjects.vue'
import About from '@/pages/AboutMe.vue'
import Contact from '@/pages/ContactMe.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
