<template>
    <v-app class="profile container">
      <div class="d-block">
        <v-container justify-center class="mt-10">
          <v-flex row justify-center align-end class="mr-0">
            <div class="jumbotron mb-md-0 mb-3">
              <h2 class="font-weight-light">Halo! Saya</h2>
              <h2 class="display-3 font-weight-bold">{{ name }}</h2>
              <h2 class="display-1 font-weight-medium">
                Front-End Web Developer
              </h2>
              <div
                v-for="palet in palletes"
                :key="palet"
                class="kotak"
                :class="palet"
              ></div>
            </div>
            <div class="profile-pict" :style="profile.img ?`background-image: url('${profile.img}')`:'none'"></div>
            <!-- <Socmed/> -->
          </v-flex>
          <v-flex class="description">
            <h2 class="sub-title">
              <div class="anim-container">
                <span class="anim"><span class="enter">Tentang Saya</span></span>
              </div>
            </h2>
            <blockquote class="blockquote px-md-16 px-6" v-html="description"></blockquote>
          </v-flex>
          <v-flex class="d-flex justify-center">
            <v-btn class='download-btn mt-5'>
              <a :href="cv_link" target="_blank">
                Download CV
              </a>
            </v-btn>
          </v-flex>
        </v-container>
      </div>
    </v-app>
</template>
<script>
export default {
  props: {
    profile: Object
  },
  data() {
    return {
      name: "ismail hadi putra".toUpperCase(),
      cv_link: "https://drive.google.com/file/d/17TWUQQUd0GtlYX15jaNu3LFF-yHD9GEL/view?usp=sharing",
      description:
        "Sangat tertarik untuk mempelajari hal-hal baru dalam pengembangan web. Saya sangat senang mendiskusikan pengembangan aplikasi yang sedang dikerjakan bersama tim. Saya telah berhasil menyelesaikan pendidikan S1 di STMIK Mikroskil di jurusan Teknik Informatika. Saat ini saya sedang dalam online internship sebagai <strong>Frontend Enginner Intern</strong> di <strong>DigiTiket</strong>",
      palletes: ["black", "teal darken-3", "green accent-2"],
    };
  }
};
</script>

<style scoped lang="sass">
.kotak
  width: 2.5em
  height: 2.5em
  display: inline-block
  margin-top: 1rem
  margin-right: 2rem

.layout
  z-index: 1

.profile-pict
  background-color: $line
  background-image: none
  background-position: center
  background-size: cover
  background-repeat: no-repeat
  box-shadow: 0 0 32px rgba(0,0,0,0.6)
  padding: 7rem
  margin: 1rem
  border-radius: 50%
  border: 6px solid white
  position: relative
  animation: enter 1.5s ease
  z-index: 3

.blockquote
  position: relative
  word-spacing: 4px
  font-family: 'Baloo Chettan 2', cursive
  font-weight: 400
  background-color: rgba(255,255,255,1)
  strong
    font-weight: bolder
  &::before
    content: ''
    position: absolute
    z-index: -1
    bottom: -10px
    left: -10px
    background: black
    opacity: 0.2
    filter: blur(4px)
    width: 120px
    height: 120px
  &::after
    content: ''
    position: absolute
    z-index: -1
    bottom: -10px
    right: -10px
    opacity: 0.2
    filter: blur(4px)
    background: black
    width: 120px
    height: 120px

.download-btn
  background: $accent-floating-button !important
  padding: 2rem !important
  margin: auto
  a
    color: $text-light !important

.description
  margin-top: 4rem
  text-align: center
  position: relative
  z-index: 10

.jumbotron
  text-align: left

@media (max-width:700px)
  // .custom-shape-divider-bottom-1600858724
  //   display: none

  .display-3
    font-size: 2.5em !important

  .display-1
    font-size: 1.5em !important

  .sub-title
    font-size: 2.5em !important

  .jumbotron
    text-align: center

  .description
    margin-top: 0
    width: 100vw

  .row
    margin: 0
</style>
