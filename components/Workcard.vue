<template>
  <div>
    <v-card loading="lazy" class="my-5 card">
      <a :href="work.url" target="blank">
        <v-img :src="work.img[0]" loading="lazy" alt="work-ss" class="card-img">
          <h3 class="card-img-msg">Kunjungi<v-icon class="icon">mdi-send</v-icon></h3>
        </v-img>

        <v-card-title class="work-title mb-n5 teal--text text--darken-3">
          <h2 class="py-3">{{ work.name }}</h2>
        </v-card-title>
      </a>
      <v-card-text class="text-left">
        <Posttime :time="work.postTime" />
      </v-card-text>

      <v-card-title class="black--text my-0">Deskripsi</v-card-title>

      <v-card-text class="text-left">
        <div class="subtitle-2" :id="'desc-' + work.name">
          {{ work.description.slice(0,150) }} ...
        </div>
      </v-card-text>

      <v-card-actions>
          <v-btn
            text
            :id="'showmore_'+work.name"
            @click="showMore(work.name)"
          >
            <span v-text="toggleShowMore ? 'Lebih sedikit': 'Selengkapnya'"></span>
          </v-btn>
        </v-card-actions>

      <v-divider class="mx-4"></v-divider>

      <v-card-title class="md-text my-0">DIBANGUN DENGAN</v-card-title>

      <v-card-text>
        <v-flex column text-left>
          <v-icon
            v-for="(lang, index) in work.madeWith"
            :key="index"
            class="mx-1 my-1 icon"
            :class="lang.color"
          >
            {{ lang.icon }}
          </v-icon>
        </v-flex>
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
const Posttime = () => import(/* webpackPreload: true */ "./Posttime");
export default {
  components: {
    Posttime,
  },

  props: {
    work: Object,
  },

  data() {
    return{
      toggleShowMore: false
    }
  },

  methods:{
    showMore(name){
      const desc = document.getElementById(`desc-${name}`);
      this.toggleShowMore = !this.toggleShowMore

      if(this.toggleShowMore === true){
        desc.innerText = this.work.description
      }
      else{
        if(this.work.description.length > 150)
          desc.innerText = `${this.work.description.slice(0,150)} ...`
        else
          desc.innerText = `${this.work.description.slice(0,150)}`
      }
    }
  }
};
</script>

<style lang="sass">
.card
  transition: 0.5s all ease
  height: fit-fit-content
  box-shadow: 2px 4px 40px rgba(0,0,0,0.6) !important
  &:hover
    transform-style: preserve-3d
    transform: translateY(-16px)
    transition: 0.5s all ease
    box-shadow: 0 0 0 transparent !important
  
.card
  position: relative
  .card-img
    justify-content: center
    align-items: center
    position: relative
    .card-img-msg
      display: none
      color: white
      .icon
          color: white
          margin-left: 16px
          margin-top: -8px
          width: 26px
          transition: 0.5s all ease
    &::after
      content: ''
      top: 0
      bottom: 0
      left: 0
      right: 0
      position: absolute
      background: rgba(0,0,0,0.4)
      backdrop-filter: blur(3px)
      transition: 0.4s all ease
      z-index: 0
  &:hover
    .card-img
      &::after
        backdrop-filter: blur(0px) contrast(80%) brightness(60%)
        transition: 0.4s all ease
    .card-img-msg
      display: flex
      width: 100%
      height: 25%
      text-align: center
      justify-content: center
      align-items: center
      top: 0
      z-index: 3
      position: relative
      filter: contrast(120%) brightness(150%)
      animation: enter 1s ease forwards
      .icon
        transform: rotateZ(-30deg)
        transition: 0.5s all ease
.icon
  transform-style: preserve-3d
  font-size: 2em !important

.work-title
  h2
    text-overflow: ellipsis
    overflow: hidden
    font-size: 1.5em
  a
    color: #122 !important
  a:hover
    color: #555 !important
    transition: 0.2s !important
</style>