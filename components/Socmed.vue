<template>
  <div class="socmed-container">
    <div class="d-sm-flex d-lg-block mt-5 justify-center">
      <ul>
        <li>
          <h2><v-icon left class="black--text">mdi-github</v-icon> GITHUB</h2>
        </li>
        <li>
          <a href="https://github.com/ismailrailgun21">
            {{ gitName }}
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <h2>
            <v-icon left class="black--text">mdi-facebook</v-icon> Facebook
          </h2>
        </li>
        <li>
          <a href="https://facebook.com/ismailrailgun21">
            {{ fbName }}
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <h2>
            <v-icon left class="black--text">mdi-linkedin</v-icon> LinkedIn
          </h2>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ismail-hadi-putra-021794193">
            {{ linkedInName }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gitName: "ismailrailgun21",
      fbName: "Ismail Hadi Putra",
      linkedInName: "Ismail Hadi Putra",
    };
  },
};
</script>

<style scoped lang="sass">
.socmed-container
  display: flex
  flex-wrap: wrap
  justify-content: center
  ul
    margin: 1rem
    &:last-child
      margin-bottom: 0
    h2
      font-family: 'Montserrat', sans-serif
      font-weight: 700

@media (max-width:480px)
  .socmed-container 
    ul
      text-align: center
</style>