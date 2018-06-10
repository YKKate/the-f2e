<template>
  <div id="no1">
    <header>
      <menu>
        <li>
          <router-link :to="{name: 'No1MyTask'}">My Tasks</router-link>
        </li>
        <li>
          <router-link :to="{name: 'No1InProgress'}">In Progress</router-link>
        </li>
        <li>
          <router-link :to="{name: 'No1Completed'}">Completed</router-link>
        </li>
      </menu>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'No1Index'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/no.1/_variable.scss';
#no1 {
  background-color: #E1E1E1;
  min-height: 100vh;
}
header {
  background-color: $mainColor;
  menu {
    display: flex;
    justify-content: space-around;
    text-align: center;
    @include PCWidth;
    li {
      flex: 1;
      list-style-type: none;
      @include rem('font-size', 24px);
      @include rem('line-height', 28px);
      a {
        position: relative;
        display: block;
        padding: 23px 0 25px;
        color: #00408B;
        line-height: 1;
        &.router-link-exact-active.router-link-active {
          color: #ffffff;
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 5px;
            width: 100%;
            background-color: #00408B;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import '~@/assets/scss/no.1/all.scss';
p.total {
  font-style: italic;
  color: #C8C8C8;
  margin-top: 8px;
  @include rem('font-size', 24px);
  @include rem('line-height', 28px);
}
</style>
