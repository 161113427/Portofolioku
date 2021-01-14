<template>
  <div>
    <v-flex class="text-center enter mx-auto" v-if="posY > 1000">
      <h2 class="sub-title">
        <div class="anim-container">
          <span class="anim">Proyek Sederhana</span>
        </div>
      </h2>
      <div class="container">
        <div class="px-5 d-flex flex-wrap w-100 justify-sm-center justify-lg-start">
          <Workcard
            class="mr-md-3 work-card"
            v-for="(work, idx) in myWorks"
            :key="idx"
            :work="work"
          />
        </div>
      </div>
    </v-flex>
  </div>
</template>
<script>
import Workcard from "~/components/Workcard";

export default {
  components: {
    Workcard,
  },

  props: {
    myWorks: Array,
    posY: Number
  },
};
</script>

<style scoped lang="sass">
.work-card
  width: 360px

@media (max-width:992px)
  .work-card-container
    display: block
  .work-card
    width: 90% !important
</style>