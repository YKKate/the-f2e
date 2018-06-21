<template>
  <div id="no3">
    <header
      v-if="$route.name !== 'No3Demo'"
    >
      <div class="header">
        <h1>Shoptime</h1>
        <menu type="context">
          <router-link :to="{ name: 'No3Index'}">HOME</router-link>
          <router-link :to="{ name: 'No3Orders'}">ORDERS</router-link>
          <router-link :to="{ name: 'No3Product'}">PRODUCT</router-link>
        </menu>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'No3Index',
  mounted () {
    this.$nextTick(function () {
      console.log(this.$route)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/no.3/_variable.scss';
header {
  color: #fff;
  background-color: #000;
  .header {
    height: $headerHeight;
    display: flex;
    align-items: center;
    @include PCWidth;
  }
  h1 {
    padding-left: 42px;
    margin-right: 80px;
    font-family: HelveticaNeue-Bold;
    @include rem('font-size', 24px);
  }
  menu {
    flex: 1;
    height: 100%;
    a {
      position: relative;
      display: inline-block;
      padding: 0 15px;
      height: 100%;
      line-height: $headerHeight;
      color: #9B9B9B;
      text-decoration: none;
      font-family: HelveticaNeue-Bold;
      transition: .3s;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        transition: .3s;
      }
      &.router-link-exact-active.router-link-active, &:hover {
        color: #fff;
        &:after {
          background-color: #fff;
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import '~@/assets/scss/no.3/all.scss';
</style>
