<script>
import axios from 'axios';

import AppCard from '../components/AppCard.vue';
import AppLoader from '../components/AppLoader.vue';

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
        AppLoader
    }

}
</script>
<template>
    <div v-if="!loading">
        <div class="container">


            <h1 class="pb-3 mb-5 border-bottom border-info">
                My Projects
            </h1>

            <div class="row">

                <!-- projects cards -->
                <div class="col-9">
                    <div class="row gy-5">
                        <AppCard :project="project" v-for="project in this.projects" />
                    </div>
                </div>

                <!-- types and technologies -->
                <div class="col-3">
                    <div class="card border-dark mb-3">
                        <div class="card-header">
                            Technologies
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li v-for="technology in technologies">
                                    <router-link :to="{ name: 'single-technology', params: { id: technology.id } }"
                                        class="link-dark link-underline-info">
                                        {{ technology.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card border-dark">
                        <div class="card-header">
                            Types
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li v-for="type in types">
                                    <router-link :to="{ name: 'single-type', params: { id: type.id } }"
                                        class="link-dark link-underline-info">
                                        {{ type.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        <AppLoader />
    </div>
</template>


<style lang="scss" scoped></style>