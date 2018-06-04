<template>
  <header id="header">
    <div class="top-menu">
      <router-link :to="{name: 'PageIndex'}" class="logo">
        <img src="/static/img/oto_hunter_logo.svg" alt="oto_hunter_logo">
      </router-link>
      <div class="menu-bars icon-menu" @click="menuOpen.main = !menuOpen.main"></div>
    </div>
    <menu type="context"
          :class="{'open': menuOpen.main}">
      <li>
        <router-link :to="{name: 'PageGeoFencing'}">Geo Fencing</router-link>
      </li>
      <li>
        <router-link :to="{name: 'PageFleetHistory'}">Fleet History</router-link>
      </li>
      <li class="has-child-menu"
          :class="{'open': menuOpen.bicycle}"
          @click="menuOpen.bicycle = !menuOpen.bicycle">
        <p>Bicycle Fleet Status</p>
        <ul class="child-menu">
          <li>
            <router-link :to="{name: 'PageBicycleFleetStatusUse'}">In Use</router-link>
          </li>
          <li>
            <router-link :to="{name: 'PageBicycleFleetStatusParked'}">Parked</router-link>
          </li>
        </ul>
      </li>
      <li class="has-child-menu"
          :class="{'open': menuOpen.alert}"
          @click="menuOpen.alert = !menuOpen.alert">
        <p>Alert</p>
        <ul class="child-menu">
          <li>
            <router-link :to="{name: 'PageAlertBicycle'}">Bicycle Alert</router-link>
          </li>
          <li>
            <router-link :to="{name: 'PageAlertUser'}">User Alert</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link :to="{name: 'PageFleetError'}">Error</router-link>
      </li>
      <li>
        <router-link :to="{name: 'PageFleetContract'}">Contract</router-link>
      </li>
      <li>
        <router-link :to="{name: 'PageUser'}">User</router-link>
      </li>
      <li>
        <router-link :to="{name: 'PageLock'}">Lock</router-link>
      </li>
      <li>
        <router-link :to="{name: 'PageLogin'}">Logout</router-link>
      </li>
    </menu>
    <div class="breadcrumb">
      <router-link :to="{name: 'PageIndex'}">DASHBOARD</router-link>
      <p v-if="$route.meta.parentRoute3">/</p>
      <router-link v-if="$route.meta.parentRouteText3" :to="{name: $route.meta.parentRoute3}">{{ $route.meta.parentRouteText3 }}</router-link>
      <p v-if="$route.meta.parentRoute2">/</p>
      <router-link v-if="$route.meta.parentRouteText2" :to="{name: $route.meta.parentRoute2}">{{ $route.meta.parentRouteText2 }}</router-link>
      <p v-if="$route.meta.parentRoute">/</p>
      <router-link v-if="$route.meta.parentRouteText" :to="{name: $route.meta.parentRoute}">{{ $route.meta.parentRouteText }}</router-link>
      <p v-if="$route.meta.text">/</p>
      <router-link v-if="$route.meta.text" :to="{name: $route.name}">{{ $route.meta.text }}</router-link>
    </div>
  </header>
</template>
<script>
export default {
  name: 'LayoutHeader',
  data () {
    return {
      menuOpen: {
        main: false,
        bicycle: false,
        alert: false
      }
    }
  },
  watch: {
    '$route': ['onChangePage']
  },
  methods: {
    onChangePage () {
      this.menuOpen.main = false
      this.menuOpen.bicycle = false
      this.menuOpen.alert = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/_variable.scss';
$menuBgColor: #88C542;
$menuColor: #fff;
$menuActiveColor: #5470C8;

.top-menu {
  height: $topMenuHeight;
  background-color: $menuBgColor;
  .logo {
    $paddingVertical: 17px;
    $paddingLeft: 10px;
    display: inline-block;
    position: relative;
    padding-left: $paddingLeft;
    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      bottom: -$paddingVertical / 2;
      left: $paddingLeft;
      background-color: #fff;
      border-radius: 2px;
    }
    img {
      vertical-align: middle;
      height: $topMenuHeight - $paddingVertical * 2;
    }
  }
  .menu-bars {
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
    height: $topMenuHeight;
    line-height: $topMenuHeight;
    color: $menuColor;
    font-size: 1.2rem;
  }
}
menu {
  display: inline-block;
  position: fixed;
  top: $topMenuHeight;
  left: -100%;
  height: calc(100vh - #{$topMenuHeight});
  padding: 15px 20px 15px 15px ;
  background-color: $menuBgColor;
  box-sizing: border-box;
  overflow-y: auto;
  transition: left .5s;
  z-index: 1000;
  &.open {
    left: 0;
  }
  > li {
    margin-bottom: 25px;
  }
  li {
    display: block;
    list-style-type: none;
    a {
      text-decoration: none;
      color: $menuColor;
      font-size: 1.2rem;
      &.router-link-exact-active.router-link-active {
        color: $menuActiveColor;
      }
    }
    &.has-child-menu {
      p {
        cursor: pointer;
        color: $menuColor;
        transition: color .3s;
      }
      ul.child-menu {
        padding-left: 40px;
        max-height: 0;
        overflow: hidden;
        transition: max-height .3s cubic-bezier(0,1,0,1),
                    padding-top .3s cubic-bezier(0,1,0,1);
        li {
          position: relative;
          margin-bottom: 5px;
          font-size: 1rem;
          font-weight: 300;
          &::before {
            content: '-';
            position: absolute;
            left: -8px;
            color: $menuColor;
          }
          a {
            color: $menuColor;
          }
        }
      }
      &.open {
        ul.child-menu {
          padding-top: 10px;
          max-height: 1000vh;
        }
      }
    }
  }
}
.breadcrumb {
  height: $topBreadcrumbHeight;
  line-height: $topBreadcrumbHeight;
  border: 1px solid $borderColor;
  padding-left: 15px;
  box-sizing: border-box;
  > * {
    display: inline-block;
  }
  a {
    color: $borderColor;
    text-decoration: none;
  }
}
@include mediaMax($mobileWidth){
  menu {
    text-align: center;
    > li {
      font-size: 1.2rem;
      padding-top: 15px;
      padding-bottom: 15px;
      margin-bottom: 0;
      a {
        font-size: 1.2rem;
      }
    }
  }
  .breadcrumb {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
