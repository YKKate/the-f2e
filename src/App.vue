<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import LayoutHeader from '@/components/items/LayoutHeader'

export default {
  http: { root: '/' },
  name: 'App',
  components: {
    'app-header': LayoutHeader
  }
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
