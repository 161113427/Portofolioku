<template>
  <div>
    <v-layout>
      <v-flex class="text-right enter row" v-if="posY > 650">
        <div class="side-image absolute-left">
          <img src="https://www.flaticon.com/svg/static/icons/svg/889/889058.svg" loading="lazy"/>
        </div>
        <div class="col-12">
          <h2 class="sub-title justify-end">
            <div class="anim-container">
              <span class="anim">Tools</span>
            </div>
          </h2>
          <p class="info-container mr-5">
            Saya menggunakan tools berikut untuk membantu saya dalam men-develope dan membangun proyek kecil-kecilan yang saya kembangkan ~
          </p>
          <div class="justify-end flex mr-5">
            <Chips :types="tools" :chips="chipsStyle" />
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Chips from "~/components/Chips";
export default {
  components: {
    Chips,
  },
  props:{
    posY: Number
  },
  data() {
    return {
      tools: [
        {
          name: "Visual Studio Code",
          color: "light-blue lighten-2",
          icon: "mdi-microsoft-visual-studio-code",
        },
        { name: "Vue-CLI", color: "green accent-4", icon: "mdi-vuejs" },
        {
          name: "Firebase-Tools",
          color: "yellow darken-1",
          icon: "mdi-firebase",
        },
        {
          name: "Figma",
          color: "deep-purple darken-1 white--text",
          icon: "mdi-pencil-ruler",
        },
      ],
      chipsStyle: `ma-2 px-5 justify-center mx-1 my-1`,
    };
  },
};
</script>