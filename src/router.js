import { createRouter, createWebHashHistory } from 'vue-router';

import AppHome from './views/AppHome.vue';
import AppContacts from './views/AppContacts.vue';
import AppAbout from './views/AppAbout.vue';
import AppProjects from './views/AppProjects.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        }
    ]
});

export { router };