<template>
  <div id="no2">
    <header>
      <div class="header">
        <div class="logo">
          <img src="static/img/no.2/logo.png" alt="LOGO">
        </div>
        <div class="search">
          <font-awesome-icon :icon="['fas','search']"/>
          <input type="text" placeholder="Explore your own activities">
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'No2Index'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/no.2/_variable.scss';
#no2 {
  min-height: 100vh;
}
header {
  height: $headerHeight;
  color: #fff;
  background-color: $mainColor;
  .header {
    height: 100%;
    padding: 24px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @include PCWidth;
  }
  .logo {
    width: $sidebarWidth;
    padding-left: 78px;
    padding-right: 149px;
    img {
      display: block;
      width: 100%;
    }
  }
  .search {
    display: flex;
    align-items: center;
    width: 388px;
    max-width: 100%;
    border-bottom: 1px solid #fff;
    input {
      flex: 1;
      margin-left: 20px;
      border: none;
      background-color: transparent;
      @include placeholder {
        color: rgba(#fff, .5);
      }
    }
  }
}
@include mediaMax($pcWidth){
  header {
    .search {
      // width: 100%;
      margin-right: 40px;
    }
  }
}
@include mediaMax($mobileWidth){
   header {
    height: auto;
    background-color: $grayColor2;
    .header {
      padding: 0;
      padding-bottom: 10px;
      display: block;
    }
    .logo {
      width: 100%;
      background-color: $mainColor;
      padding: 20px 0;
      img {
        width: 105px;
        display: block;
        margin: auto;
      }
    }
    .search {
      $iconWidth: 16px;
      flex: none;
      display: block;
      position: relative;
      width: 100%;
      padding: 10px 40px;
      margin: 0;
      // background: $grayColor2;
      color: #000;
      border-color: transparent;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        display: block;
        height: 1px;
        width: calc(100% - 40px * 2);
        background-color: #000;
        transform: translateX(-50%);
      }
      svg {
        display: inline-block;
        width: $iconWidth;
      }
      input {
        display: inline-block;
        width: calc(100% - #{$iconWidth} - 5px);
        margin: 0;
        padding-left: 10px;
        @include placeholder {
          color: $grayColor4;
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import '~@/assets/scss/no.2/all.scss';
</style>
