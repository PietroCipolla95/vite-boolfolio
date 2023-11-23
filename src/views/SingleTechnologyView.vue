<script>

import axios from 'axios';
import AppCard from '../components/AppCard.vue';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'SingleTechnologyView',
    components: {
        AppCard,
        AppLoader,
    },
    data() {
        return {
            technology_api: 'http://127.0.0.1:8000/api/technologies/',
            loading: true,
            technology: null
        }
    },

    mounted() {

        axios.get(this.technology_api + this.$route.params.id)
            .then(response => {

                console.log(response.data.technology);

                if (response.data.response) {
                    console.log('found');

                    this.technology = response.data.technology
                    console.log(this.technology);

                    this.loading = false;
                } else {
                    console.log('not found');
                    this.$router.push({ name: 'NotFound' });
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

            <h1 v-if="technology" class="bg-dark rounded-4 border-5 border-start border-info py-4 ps-4 mb-5 text-light">
                Projects in
                <span class="text-info fw-bold">
                    {{ technology.name }}
                </span>
            </h1>


            <div class="row">

                <AppCard v-if="technology" :project="project" v-for="project in technology.projects" />

            </div>


        </div>
    </div>

    <div v-else>
        <AppLoader />
    </div>
</template>


<style lang="scss" scoped></style>