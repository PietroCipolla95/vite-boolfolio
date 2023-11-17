<script>

import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppCard from './components/AppCard.vue';

export default {
  data() {
    return {
      projects_api: 'http://127.0.0.1:8000/api/projects',
      projects: [],
    }
  },

  components: {
    AppHeader,
    AppFooter,
    AppCard,
  },

  mounted() {
    axios
      .get(this.projects_api)
      .then(response => {
        this.projects = response.data.projects.data;
      })
  }

}

</script>

<template>
  <AppHeader />

  <main class="min-vh-100">
    <div class="container">

      <h1 class="text-center pb-4">
        My Projects
      </h1>

      <div class="row">
        <div class="col-4" v-for="project in   this.projects  ">
          <AppCard :project="project" />
        </div>
      </div>
    </div>
  </main>

  <AppFooter />
</template>

<style scoped></style>
