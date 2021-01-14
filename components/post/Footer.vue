<template>
  <section>
    <v-footer class="teal accent-3 flex justify-center">
      <v-card flat tile class="teal accent-3 text-center">
        <v-card-text>
          <h1 class="display-1 grey--text text--darken-4">Portfolioku</h1>
          <v-btn
            v-for="icon in socmed"
            :key="icon.name"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px" color="white">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="black--text pt-0">
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="black--text">
          Copyright {{ new Date().getFullYear() }} — <strong>Ismail Hadi Putra</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </section>
</template>

<script>
export default {
  data() {
    return{
      socmed: {
        "facebook" : {
          name: "Facebook",
          url: "https://facebook.com/ismailrailgun21",
          icon: "mdi-facebook",
        },
        "instagram": {
          name: "Instagram",
          url: "https://instagram.com/ismailrailgun21",
          icon: "mdi-instagram",
        },
        "linkedIn": {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/ismail-hadi-putra-021794193/",
          icon: "mdi-linkedin",
        }
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.v-card
  font-family: 'Montserrat', sans-serif
</style>