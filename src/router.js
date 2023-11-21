import { createRouter, createWebHashHistory } from 'vue-router';

import AppHome from './views/AppHome.vue';
import AppContacts from './views/AppContacts.vue';
import AppAbout from './views/AppAbout.vue';
import AppProjects from './views/AppProjects.vue';
import SingleProject from './views/SingleProject.vue';
import NotFound from './views/NotFound.vue';
import SingleTechnologyView from './views/SingleTechnologyView.vue';
import SingleTypeView from './views/SingleTypeView.vue';


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
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound

        },
        {
            path: '/technologies/:id',
            name: 'technologies',
            component: SingleTechnologyView
        },

        {
            path: '/types/:id',
            name: 'types',
            component: SingleTypeView
        },
    ]
});

export { router };