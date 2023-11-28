<script>
import AppHeader from '../components/AppHeader.vue';

export default {
    name: 'AppContacts',

    components: {
        AppHeader,
    }
}
</script>
<template>
    <div class="container">

        <div class="wrapper pb-2 d-flex justify-content-between align-items-baseline">
            <h1 class="text-light">
                Contact
            </h1>
            <AppHeader />
        </div>

        <div class="my_border_bottom mb-5"></div>
        <div class="py-3">
            <p>
                <i class="fa-solid fa-envelope fa-xl"></i>
                pietro.cipolla.95@gmail.com
            </p>
            <p>
                <i class="fa-solid fa-phone fa-xl"></i>
                +39 23788778123
            </p>
        </div>

    </div>
</template>
<style lang="scss" scoped></style>