<script>
import axios from 'axios';

import AppCard from '../components/AppCard.vue';
import AppLoader from '../components/AppLoader.vue';
import AppHeader from '../components/AppHeader.vue';

export default {
    name: 'AppProjects',
    data() {
        return {
            projects_api: 'http://127.0.0.1:8000/api/projects',
            url: 'http://127.0.0.1:8000',
            projects: [],
            technologies: [],
            types: [],
            loading: true,
        }
    },
    components: {
        AppCard,
        AppLoader,
        AppHeader
    },
    mounted() {
        axios
            .get(this.projects_api)
            .then(response => {
                this.projects = response.data.projects.data;
                this.loading = false;
            })

        axios.get(this.url + '/api/technologies').then(response => {
            console.log(response);
            this.technologies = response.data.result
            console.log(this.technologies);
        })

        axios.get(this.url + '/api/types').then(response => {
            console.log(response);
            this.types = response.data.result
            console.log(this.types);
        })

            .catch(error => {
                console.log(error);
            })

    },
    components: {
        AppCard,
        AppLoader,
        AppHeader
    }

}
</script>
<template>
    <div v-if="!loading">
        <div class="container">


            <div class="wrapper pb-2 d-flex justify-content-between align-items-baseline">
                <h1 class="text-light">
                    My Projects
                </h1>
                <AppHeader />
            </div>

            <div class="my_border_bottom mb-5"></div>


            <div class="row">

                <!-- projects cards -->
                <div class="col-10">
                    <div class="row gy-5">
                        <AppCard :project="project" v-for="project in this.projects" />
                    </div>
                </div>

                <!-- types and technologies -->
                <div class="col-2 text-center">

                    <div class="filters_wrapper card bg-dark py-4">

                        <h4 class="my_color">
                            Technologies
                        </h4>

                        <ul class="list-unstyled">
                            <li v-for="technology in technologies" class="py-1">
                                <router-link :to="{ name: 'single-technology', params: { id: technology.id } }"
                                    class="link-light">
                                    {{ technology.name }}
                                </router-link>
                            </li>
                        </ul>

                        <h4 class="my_color">
                            Types
                        </h4>

                        <ul class="list-unstyled">
                            <li v-for="single_type in types" class="py-1">
                                <router-link :to="{ name: 'single-type', params: { id: single_type.id } }"
                                    class="link-light">
                                    {{ single_type.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div v-else>
        <AppLoader />
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/app.scss';

a {
    text-decoration: none;
}
</style>