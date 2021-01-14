<template>
  <div class="skills-container">
    <v-layout>
      <v-flex class="text-left enter row" justify-start v-if="posY > 300">
        <div class="col-12">
          <h2 class="sub-title justify-start">
            <div class="anim-container">
              <span class="anim">Skill</span>
            </div>
          </h2>
          <p class="info-container ml-5">
            {{ skillDesc }}
          </p>
          <div class="col-lg-8 col-sm-12 mx-0 anim">
            <Chips :types="skills" :chips="chipsStyle" />
          </div>
        </div>
        <div class="side-image absolute-right">
          <img src="https://www.flaticon.com/svg/static/icons/svg/1055/1055672.svg" loading="lazy"/>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
const Chips = ()=> import(/* webpackPrefetch: true */ "~/components/Chips");
export default {
  components: {
    Chips,
  },
  props:{
    posY: Number
  },
  data() {
    return {
      skillDesc: "Saya mulai serius belajar mendalami pengembangan web sejak tahun lalu karena saya senang dan tertarik dalam dunia pengembangan web. Saya mulai mempelajari beberapa skill baru diantaranya.",
      skills: [
        {
          name: "Javascript",
          color: "yellow accent-2",
          icon: "mdi-language-javascript",
        },
        {
          name: "HTML",
          color: "orange darken-4 white--text",
          icon: "mdi-language-html5",
        },
        {
          name: "CSS",
          color: "light-blue lighten-2",
          icon: "mdi-language-css3",
        },
        {
          name: "JQuery",
          color: "light-blue darken-3 white--text",
          icon: "mdi-jquery",
        },
        { name: "Vue JS + Vuex", color: "green accent-4", icon: "mdi-vuejs" },
        {
          name: "Nuxt JS + Vuex",
          color: "teal darken-3 white--text",
          icon: "mdi-nuxt",
        },
        { name: "Node JS", color: "green lighten-1", icon: "mdi-nodejs" },
        { name: "Firebase", color: "yellow darken-1", icon: "mdi-firebase" },
        {
          name: "REST API",
          color: "light-blue darken-1 white--text",
          icon: "mdi-server-network",
        },
        {
          name: "OOP",
          color: "indigo darken-4 white--text",
          icon: "mdi-family-tree",
        },
        {
          name: "Version Control",
          color: "black white--text",
          icon: "mdi-github",
        },
      ],
      chipsStyle: `px-5 justify-center mx-1 my-1`,
    };
  },
};
</script>
<style lang="sass" scoped>
.skills-container
  min-height: 60vh

</style>
