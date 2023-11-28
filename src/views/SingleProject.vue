<script>

import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'SingleProject',
    data() {
        return {
            projects_api: 'http://127.0.0.1:8000/api/projects/',
            project: {},
            response: false,
            loading: true,

        }
    },

    components: {
        AppLoader,
    },

    mounted() {
        axios.get(this.projects_api + this.$route.params.slug)
            .then(response => {

                console.log(response);
                this.response = true;

                if (response.data.response) {
                    this.project = response.data.single_project;
                    this.loading = false;
                    console.log(this.project);
                    console.log('found');

                } else {
                    this.$router.push({ name: 'NotFound' });
                    console.log('not found');
                }
            })

            .catch(err => {
                console.log(err.message);
            })
    }
}
</script>
<template>
    <div v-if="!loading">
        <div class="container">

            <!-- project banner -->
            <div class="bg-dark text-light rounded-5 my_border p-4 mb-5 d-flex align-items-center justify-content-evenly">
                <router-link to="/projects" class="btn btn-secondary fw-bold">
                    <i class="fa-solid fa-angles-left"></i>
                    Projects
                </router-link>
                <h2>
                    {{ this.project.title }}
                </h2>
                <div id="technologies_type">
                    <span class="p-2 badge bg-secondary me-3">
                        {{ this.project.type.name }}
                    </span>
                    <span v-for=" technology  in  project.technologies " class="p-2 badge my_bg me-1">
                        {{ technology.name }}
                    </span>
                </div>
            </div>

            <!-- project infos -->
            <div class="row">

                <!-- project previw -->
                <div class="col-6">
                    <img class="img-fluid rounded-4" :src="'http://127.0.0.1:8000/storage/' + project.cover_image"
                        alt="{{ this.project.title }}">
                </div>

                <!-- project description and links -->
                <div class="col-6">
                    <div class="card p-4 mb-4 border-dark">
                        <p>
                            {{ this.project.description }}
                        </p>
                    </div>

                    <!-- link wrapper -->
                    <div class="d-flex align-items-center justify-content-end">
                        <a :href="project.git_link" class="me-2 text-light">
                            <i class="fa-brands fa-github fa-2xl"></i>
                        </a>
                        <a :href="project.project_link" class="text-success">
                            <i class="fa-solid fa-globe fa-2xl"></i>
                        </a>
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