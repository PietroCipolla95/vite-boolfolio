<script>
export default {
    name: 'AppCard',

    props: {
        project: Object,
    }
}
</script>
<template>
    <div class="card">

        <!-- card header -->
        <div class="card-header">
            <h4>
                {{ project.title }}
            </h4>
            <span class="badge bg-dark">
                {{ project.type.name }}
            </span>
        </div>

        <!-- card body -->
        <div class="card-body">
            <img class="img-fluid rounded" :src="'http://127.0.0.1:8000/storage/' + project.cover_image" alt="">
            <p class="pt-3">
                {{ project.description }}
            </p>
        </div>

        <!-- card footer -->
        <div class="card-footer py-3 d-flex justify-content-between">
            <div class="col-8">
                <span v-for="technology in project.technologies" class="p-2 badge bg-info me-1 mb-1">
                    {{ technology.name }}
                </span>
            </div>
            <div class="d-flex align-items-end">
                <a :href="project.git_link" class="me-2 text-dark">
                    <i class="fa-brands fa-github fa-2xl"></i>
                </a>
                <a :href="project.project_link" class="text-success">
                    <i class="fa-solid fa-globe fa-2xl"></i>
                </a>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>