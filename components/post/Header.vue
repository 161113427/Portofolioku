<template>
  <section>
    <v-carousel
      :show-arrows="false"
      cycle
      interval="3000"
      :height="windowWidth > 800 ? '90vh' : '50vh'"
    >
      <v-carousel-item
        eager
        transition="scroll-x-transition"
        reverse-transition="scroll-x-reverse-transition"
        v-for="(image, i) in images"
        :key="i"
        :src="image"
        loading="lazy"
      />
    </v-carousel>
  </section>
</template>

<script>
export default {
  props: ["images"],
  data() {
    const width = window.innerWidth;
    return {
      windowWidth: width,
    };
  },
  created() {
    window.addEventListener("resize", this.handlerResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handlerResize);
  },
  methods: {
    handlerResize(e) {
      this.windowWidth = innerWidth;
    },
  },
};
</script>
<style lang="sass" scoped>
</style>