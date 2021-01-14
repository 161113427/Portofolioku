<template>
  <div class="posttime">
    <span>
      {{ new Date(time).toLocaleDateString('id-Id', {weekday:'long', day:'numeric', month:'long', year:'numeric'})}}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    time: Number
  },
};
</script>

<style lang="sass" scoped>
.posttime
  font-family: 'Open Sans', sans-serif
</style>