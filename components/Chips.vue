<template>
  <v-flex justify-center>
    <v-chip
      class="chips col-sm-auto"
      large
      :class="chips"
      v-for="type in types"
      :key="type.name"
      :color="type.color"
    >
      <v-icon left>{{ type.icon }}</v-icon>
      <span class="chips-name">{{ type.name }}</span>
    </v-chip>
  </v-flex>
</template>
<script>
export default {
  props: {
    types: Array,
    color: String,
    chips: String,
  },
  data() {
    return {};
  },
};
</script>
<style lang="sass" scoped>
.chips
  padding: 0 2rem !important
.chips-name
  font-size: 0.85rem
</style>