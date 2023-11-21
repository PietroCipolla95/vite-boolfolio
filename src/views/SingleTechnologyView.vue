<script>

import axios from 'axios';
import AppCard from '../components/AppCard.vue';

export default {
    name: 'SingleTechnologyView',
    components: {
        AppCard,
    },
    data() {
        return {
            technology_api: 'http://127.0.0.1:8000/api/technologies/',
            loading: true,
            category: null
        }
    },

    mounted() {

    }
}    
</script>
<template>
    <div>

    </div>
</template>


<style lang="scss" scoped></style>