<template>
  <div class="page-content">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'Layout'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variable.scss';
.page-content {
  position: fixed;
  top: $topMenuHeight + $topBreadcrumbHeight;
  left: 0;
  height: calc(100vh - #{$topMenuHeight} - #{$topBreadcrumbHeight});
  width: 100vw;
  overflow: auto;
  background-color: $bgColor;
}
</style>
