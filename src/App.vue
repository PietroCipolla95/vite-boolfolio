<script>

import axios from 'axios';

export default {
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
  }

}

</script>

<template>
  <header class="mb-4">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="nav navbar-nav">
        <a class="nav-item nav-link">Home</a>
        <a class="nav-item nav-link" href="#">Contacts</a>
      </div>
    </nav>
  </header>

  <main>
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="project in   this.projects  ">
          <div class="card">
            <div class="card-header">
              <h4>
                {{ project.title }}
              </h4>
              <span class="badge bg-dark">
                {{ project.type.name }}
              </span>
            </div>
            <div class="card-body">
              <img class="img-fluid rounded" :src="'http://127.0.0.1:8000/storage/' + project.cover_image" alt="">
              <p class="pt-3">
                {{ project.description }}
              </p>
            </div>
            <div class="card-footer py-3 d-flex justify-content-between">
              <div class="col-8">
                <span v-for="technology in project.technologies" class="p-2 badge bg-info me-1 mb-1">
                  {{ technology.name }}
                </span>
              </div>
              <div>
                <a :href="project.git_link" class="me-2">
                  <i class="fa-brands fa-github fa-2xl"></i>
                </a>
                <a :href="project.project_link">
                  <i class="fa-solid fa-globe fa-2xl"></i>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>

  </footer>
</template>

<style scoped></style>
