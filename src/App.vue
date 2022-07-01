<template>
  <div id="app">
    <TheHeader></TheHeader>
    <TheMain></TheMain>
  </div>
</template>

<script>


import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain
}
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
