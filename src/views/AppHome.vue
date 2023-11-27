<script>
export default {
    name: 'AppHome',
}
</script>
<template>
    <div class="container">

        <div class="mb-4 rounded-4 text-light w-50 my_border">
            <div class="container p-5">
                <h1 class="display-5 fw-bold mb-5">
                    I'm Pietro Cipolla, <br>
                    <span class="my_color">
                        Full Stack
                    </span>
                    Web Developer
                </h1>
                <router-link to="/projects" class="btn my_btn fw-bold fs-5">
                    Take a look at my projects
                    <i class="fa-solid fa-angles-right"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.my_border {
    border-left: 5px solid #CC2680;
}

.my_btn {
    border: 1px solid #CC2680;
    padding: .7rem;
    color: #CC2680;
    transition: all .6s ease-in-out;

    &:hover {
        background-color: #CC2680;
        color: black;

    }

}
</style>