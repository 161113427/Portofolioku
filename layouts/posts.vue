<template>
  <v-app>
    <v-main class="posts">
      <AppBar elevateOnScroll />
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
import "@/assets/sass/index.sass";
import AppBar from "~/components/AppBar";

export default {
  components: {
    AppBar,
  },
};
</script>

<style scoped lang="sass">
.posts
  margin: 0 auto
  font-family: 'Poppins'
  min-height: 100vh
</style>