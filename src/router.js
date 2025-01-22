import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/Home.View.vue'
import AboutView from './views/About.View.vue'
import WorksView from './views/Works.View.vue'
import WorkView from './views/Work.View.vue'

const routes = [
    { inMenu: true, path: '/', component: HomeView, name: "home", },
    { inMenu: true, path: '/about', component: AboutView, name: "about", },
    { inMenu: true, path: '/works', component: WorksView, name: "works", },
    { inMenu: false, path: '/work/:id', component: WorkView, name: "work", },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router