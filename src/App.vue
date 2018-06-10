<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  http: { root: '/' },
  name: 'App'
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, 微軟正黑體, "Microsoft JhengHei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
