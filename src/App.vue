<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  data() {
    return {

    }
  },

  components: {
    AppHeader,
    AppFooter,
  },

}

</script>

<template>
  <AppHeader />

  <main class="py-5">

    <router-view></router-view>

  </main>

  <AppFooter />
</template>

<style scoped></style>
