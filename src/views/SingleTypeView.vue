<script>

import axios from 'axios';
import AppCard from '../components/AppCard.vue';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'SingleTypeView',

    components: {
        AppCard,
        AppLoader,
    },

    data() {
        return {
            type_api: 'http://127.0.0.1:8000/api/types/',
            loading: true,
            type: null
        }
    },

    mounted() {

        axios.get(this.type_api + this.$route.params.id)
            .then(response => {

                console.log(response.data.type);

                if (response.data.response) {
                    console.log('found');

                    this.type = response.data.type
                    console.log(this.type);

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

            <h1 v-if="type" class="bg-dark rounded-4 border-5 border-start border-info py-4 ps-4 mb-5 text-light">
                <span class="text-info fw-bold">
                    {{ type.name }}
                </span>
                Projects
            </h1>


            <div class="row">

                <AppCard v-if="type" :project="project" v-for="project in type.projects" />

            </div>


        </div>
    </div>

    <div v-else>
        <AppLoader />
    </div>
</template>


<style lang="scss" scoped></style>