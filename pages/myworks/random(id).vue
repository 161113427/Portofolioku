<template>
  <section class="w-100">
    <div v-for="work in getMyWorks" :key="work.name">
      <Header
        class="my-work"
        v-if="`/myworks/${work.name.toLowerCase()}` === $route.path"
        :images="work.img"
      />
      <v-container v-if="`/myworks/${work.name.toLowerCase()}` === $route.path">
        <Content :content="work" />
      </v-container>
      <Footer v-if="`/myworks/${work.name.toLowerCase()}` === $route.path"> </Footer>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const Header = ()=> import(/* webpackPreload: true */ "@/components/post/Header.vue");
const Content = ()=> import(/* webpackPrefetch: true */ "@/components/post/Content.vue");
const Footer = ()=> import(/* webpackPrefetch: true */ "@/components/post/Footer.vue");

export default {
  layout: "posts",
  head: {
    title: "judul",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Selamat datang di portofolioku, semoga bisa menjadi referensi untuk Anda'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  components: {
    Header,
    Content,
    Footer
  },

  beforeMount() {
    this.fetchWorks();
  },

  computed: {
    ...mapGetters(["getMyWorks"]),
  },

  methods: {
    ...mapActions(["fetchWorks"]),
  },
};
</script>

<style>
.my-work {
  margin-top: 10vh;
}
</style>