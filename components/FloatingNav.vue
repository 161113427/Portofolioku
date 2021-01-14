<template>
  <v-speed-dial
    v-model="fab"
    :transition="transition"
    bottom
    right
    fixed
    v-if="collapse"
    class="mx-3 my-3 fab"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="teal darken-3" dark fab>
        <v-icon v-if="fab"> mdi-close </v-icon>
        <v-icon v-else> mdi-menu </v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      light
      color="white"
      v-for="item in routes"
      :key="item.route"
      :href="item.route"
    >
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-speed-dial>
  <div class="floating-nav" v-else>
    <div>
      <a
        class="floating-button"
        v-for="item in routes"
        :key="item.route"
        :href="item.route"
      >
        <v-icon>
          {{ item.icon }}
        </v-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
      fab: false,
      transition: "slide-y-transition",
      routes: [
        {
          route: "#profile",
          icon: "mdi-account",
        },
        {
          route: "#skills",
          icon: "mdi-laptop",
        },
        {
          route: "#tools",
          icon: "mdi-hammer-screwdriver",
        },
        {
          route: "#myworks",
          icon: "mdi-briefcase",
        },
      ],
    };
  },
  mounted() {
    this.windowSize();
    this.$nextTick(this.screenResize());
  },
  destroyed() {
    this.screenResize();
  },
  methods: {
    screenResize() {
      addEventListener("resize", this.resizeHandler);
    },
    windowSize() {
      addEventListener("load", () => {
        if (window.innerWidth < 800) this.collapse = true;
        else this.collapse = false;
      });
    },
    resizeHandler() {
      if (innerWidth < 800) this.collapse = true;
      else this.collapse = false;
    },
  },
};
</script>

<style scoped>
.fab{
  z-index: 99;
}
.floating-nav {
  top: 35%;
  background: transparent;
  display: flex;
  position: fixed;
  flex-direction: column-reverse;
  left: 6rem;
  align-items: center;
  z-index: 99;
}

.floating-button {
  opacity: 0.7;
  transition: 0.2s;
  background: white;
  padding: 0.7rem;
  margin: 1rem;
  font-size: 0.75rem;
  display: block;
  border-radius: 50px;
  box-shadow: 1px 4px 3px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.floating-button:hover {
  transition: 0.2s;
  transform: translateY(-8px);
  opacity: 1;
}

.floating-button:hover > .v-icon {
  color: #099962;
}

@media (max-width: 800px) {
  .floating-nav div {
    height: auto;
    background: transparent;
    position: fixed;
    /* align-items: flex-end; */
    /* justify-content: flex-end; */
    right: 1.5rem;
    bottom: 1.5rem;
  }
  .floating-button {
    opacity: 1;
  }
}
</style>
