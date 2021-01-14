<template>
  <section class="content">
    <h1 class="sub-title">{{ content.name }}</h1>
    <div class="timestamp">
      <Posttime :time="content.postTime"/>
    </div>
    <div>
      <h4><a href="#">By Ismail Hadi Putra</a></h4>
    </div>
    <div class="description">
      <p v-for="i in 3" :key="i">
        {{ content.description }}
      </p>
    </div>
    <div class="tags">
      <h1>Tags</h1>
      <v-flex column text-left>
        <v-chip
          v-for="(lang, index) in content.madeWith"
          :key="index"
          class="grey white--text darken-4 mr-2 mb-2 font-weight-medium px-4"
        >
          <v-icon :class="lang.color">
            {{ lang.icon }}
          </v-icon>
          {{lang.name}}
        </v-chip>
      </v-flex>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: Object
  }
};
</script>

<style lang="sass" scoped>
.content
  min-height: 100vh
  .sub-title
    justify-content: flex-start

.timestamp *
  color: $text-soft-dark

.description
  margin-top: 2rem
  font-size: 1rem
  font-family: 'Roboto', sans-serif

.tags h1
  margin: 1rem 0
</style>