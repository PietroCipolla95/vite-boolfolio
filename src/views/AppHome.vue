<script>
export default {
    name: 'AppHome',
}
</script>
<template>
    <div class="container">

        <div class="p-5 mb-4 rounded-4 bg-dark text-light border-5 border-start border-info">
            <div class="container py-5">
                <h1 class="display-5 fw-bold mb-5">
                    Welcome to my portfolio!
                </h1>
                <router-link to="/projects" class="btn btn-outline-info fw-bold fs-5">
                    Take a look at my projects
                    <i class="fa-solid fa-angles-right"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>