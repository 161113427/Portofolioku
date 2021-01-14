<template>
  <div class="footer teal accent-3 justify-center">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L40,272C80,256,160,224,240,181.3C320,139,400,85,480,101.3C560,117,640,203,720,240C800,277,880,267,960,229.3C1040,192,1120,128,1200,96C1280,64,1360,64,1400,64L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L1440,128L1440,0L0,0Z"></path></svg>
    <div class="d-lg-flex my-footer text-center">
      <div class="mx-3">
        <h2 class="display-2 title-web mb-sm-5 mb-md-0 mt-sm-5 mt-md-0">
          Portfolioku
        </h2>
      </div>
      <div class="text-center mx-3">
        <!-- <h2 class="display-1">Created With</h2> -->
        <ul class="framework d-lg-flex align-items-center">
          <li>
            <Logo class="logo" loading="lazy"/>
            <h3>Nuxt JS</h3>
          </li>
          <li>
            <VuetifyLogo class="logo" loading="lazy" />
            <h3>Vuetify</h3>
          </li>
          <li>
            <FirebaseLogo class="logo" loading="lazy"/>
            <h3>Firebase</h3>
          </li>
        </ul>
      </div>
      <div class="mx-3">
        <h2>Terhubung Dengan</h2>
        <Socmed class="socmed" />
      </div>
    </div>
    <div class="copyright">
      <p>Copyright 2020 - Created and Designed by Ismail Hadi Putra</p>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
const Socmed = ()=> import("~/components/Socmed");
import VuetifyLogo from "~/components/VuetifyLogo";
import FirebaseLogo from "~/components/FirebaseLogo";

export default {
  props: {
    width: Number,
  },

  data() {
    return {};
  },

  components: {
    Logo,
    Socmed,
  },

  mounted() {
    this.screenResize();
  },

  methods: {
    screenResize(width) {
      if (width < 700) return true;
      else return false;
    },
  },
};
</script>

<style lang="sass" scoped>
.footer
  min-height: 60vh !important
  margin-top: -5rem

.my-footer
  justify-content: center
  font-family: 'Montserrat', sans-serif
  align-items: center

.title-web
  transform-style: preserve-3d
  &:hover
    transform: rotateZ(-10deg) skew(-5deg) perspective(800px)
    cursor: pointer
    transition: 0.1s all ease-in
    color: $text-dark
    opacity: 0.8

.framework
  padding: 0
  text-align: center
  margin: 1.5rem auto
  display: flex
  flex-wrap: wrap
  justify-content: center
  li
    padding: 1rem
    filter: sepia(50%)
    .logo
      height: 7rem
    h3
      font-size: 2em
      font-weight: 800
      color: $text-dark
  li:hover
    filter: sepia(0)
    transition: 0.2s all

.copyright
  display: flex
  justify-content: center
  text-align: center
  width: 100%
  height: 10vh
  margin-top: 30px
  padding: 0 2rem
  font-weight: 300
  align-items: flex-end
  color: black

.display-1, .display-2
  margin-top: 3rem
  font-family: 'Montserrat', sans-serif !important
  color: $text-dark
  font-weight: 700

.socmed
  text-align: left

@media (max-width:700px)
  .framework
    .logo
      height: 5rem
  .display-1
    text-align: center
  .display-2
    font-size: 1.2em
  .socmed
    text-align: center
</style>
