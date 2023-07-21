<template>
  <the-header></the-header>
  <router-view v-if="isAuth"></router-view>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  computed: {
    isAuth() {
      return this.$store.getters.isUserAuthernticated;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
