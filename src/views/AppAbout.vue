<script>

import AppHeader from '../components/AppHeader.vue';

export default {
    name: 'AppAbout',

    components: {
        AppHeader,
    }

}
</script>
<template>
    <div class="container">
        <div class="wrapper pb-2 d-flex justify-content-between align-items-baseline">
            <h1 class="text-light">
                About Me
            </h1>
            <AppHeader />
        </div>

        <div class="my_border_bottom mb-5"></div>

    </div>
</template>


<style lang="scss" scoped></style>