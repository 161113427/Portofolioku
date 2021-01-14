<template>
  <div>
    <v-app-bar dense fixed height="70" elevateOnScroll>
      <v-container class="d-flex">
        <v-toolbar-title class="font-weight-black">
          <nuxt-link to="/"> < PORTFOLIOKU</nuxt-link>
        </v-toolbar-title>
        <!-- <v-spacer/> -->
        <!-- <ul v-show="$route.path === '/' ? false : true">
          <li v-for="nav in navs" :key="nav" class="mx-5">
              <a :href="'#' + nav.split(' ').join('').toLowerCase()">
                  {{ nav }}
              </a>
          </li>
        </ul> -->
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navs: ["Skills", "Tools", "My Works"],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped lang='sass'>
a
  color: #555 !important
  letter-spacing: 3px

a
  &:hover
    color: #222 !important

ul
  display: flex
</style>