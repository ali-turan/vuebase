<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {

  }
</script>


<style>
  html {
    overflow: hidden;
  }

  main.app-content {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .v-content__wrap {
    position: relative;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  }
</style>