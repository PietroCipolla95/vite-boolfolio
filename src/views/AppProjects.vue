<script>
import axios from 'axios';

import AppCard from '../components/AppCard.vue';

export default {
    name: 'AppProjects',
    data() {
        return {
            projects_api: 'http://127.0.0.1:8000/api/projects',
            projects: [],
        }
    },
    mounted() {
        axios
            .get(this.projects_api)
            .then(response => {
                this.projects = response.data.projects.data;
            })
    },
    components: {
        AppCard,
    }

}
</script>
<template>
    <div class="container">



        <h1 class="pb-3 mb-5 border-bottom border-info">
            My Projects
        </h1>

        <div class="row gy-5">
            <div class="col-4" v-for="project in   this.projects  ">

                <AppCard :project="project" />

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>