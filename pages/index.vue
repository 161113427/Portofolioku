<template>
  <v-layout class="d-block">
    <FloatingNav />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="top-wave"
    >
      <path
        fill="#1DE9B6"
        fill-opacity="1"
        d="M0,64L1440,288L1440,0L0,0Z"
      ></path>
    </svg>
    <Profile id="profile" :profile="getMyProfile"/>
    <div class="mx-auto my-0">
      <div class="flex column col-lg-12">
        <Skills class="my-5 mx-auto container" id="skills" :posY="posY" />
        <Tools class="my-5 mx-auto container" id="tools" :posY="posY" />
      </div>
    </div>
    <MyWorks
      class="justify-center"
      :myWorks="getMyWorks"
      id="myworks"
      :posY="posY"
    />
    <MyFooter :width="windowWidth" />
  </v-layout>
</template>

<script>
const Profile = () =>
  import(/* webpackPreload: true */ "~/components/sections/Profile");
const Skills = () =>
  import(/* webpackPreload: true */ "~/components/sections/Skills");
const Tools = () =>
  import(/* webpackPreload: true */ "~/components/sections/Tools");
const MyWorks = () =>
  import(/* webpackPreload: true */ "~/components/sections/MyWorks");
const MyFooter = () =>
  import(/* webpackPrefetch: true */ "~/components/sections/MyFooter");
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "default",
  components: {
    Profile,
    Skills,
    Tools,
    MyWorks,
    MyFooter,
  },

  head: {
    title: "Portofolioku",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Selamat datang di portofolioku, semoga bisa menjadi referensi untuk Anda",
      },
    ]
  },

  data() {
    return {
      windowWidth: 0,
      profilePos: 0,
      skillsPos: 0,
      toolsPos: 0,
      myworksPos: 0,
      posY: 0
    };
  },

  mounted() {
    this.fetchWorks();
    this.fetchProfile();
  },

  beforeMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
    this.handleResize();
  },

  computed: {
    ...mapGetters(["getMyWorks", "getMyProfile"]),
  },

  methods: {
    ...mapActions(["fetchWorks", "fetchProfile"]),

    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    handleScroll() {
      if (window.scrollY > this.posY) this.posY = window.scrollY;
    },
  },

  // async asyncData() {
  //   let workList = []
  //   await db.collection('Portfolio')
  //       .doc('Ismail')
  //       .collection('My Works')
  //       .get()
  //       .then((works) => {
  //         works.forEach((work) => {
  //             workList.push(work.data())
  //         })
  //       })
  //   return { workList }
  // },
};
</script>

<style scoped>
.top-wave {
  position: absolute;
}
#myworks {
  min-height: 400px;
  padding: 2rem 0 !important;
}
</style>
