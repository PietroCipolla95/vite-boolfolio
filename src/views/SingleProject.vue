<script>

import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            projects_api: 'http://127.0.0.1:8000/api/projects/',
            project: [],
        }
    },
    mounted() {
        axios.get(this.projects_api + this.$route.params.slug)
            .then(response => {

                if (response.data.response) {
                    this.project = response.data.single_project;
                    this.response = true;
                    console.log(this.project);
                } else {
                    this.$router.push({ slug: 'not-found' });
                }
            })

            .catch(err => {
                console.log(err);
            })
    }
}
</script>
<template>
    <div class="container">

        <!-- project banner -->
        <div class="bg-dark text-light rounded-5 p-4 mb-5 d-flex align-items-center justify-content-evenly">
            <h2>
                {{ this.project.title }}
            </h2>
            <div id="technologies_type">
                <span class="p-2 badge bg-secondary me-3">
                    <!-- {{ this.project.type.name }} -->
                </span>
                <span v-for=" technology  in  project.technologies " class="p-2 badge bg-info me-1">
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
                    <a :href="project.git_link" class="me-2 text-dark">
                        <i class="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a :href="project.project_link" class="text-success">
                        <i class="fa-solid fa-globe fa-2xl"></i>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>