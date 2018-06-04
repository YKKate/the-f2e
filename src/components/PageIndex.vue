<template>
  <div id="index">
    <div class="fleet-location">
      <p class="title">FLEET LOCATION</p>
      <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=103台北市中正區鄭州路8號&output=embed&t="></iframe>
    </div>
    <div class="charts">
      <div class="pie">
        <p class="title">FLEET STATUS</p>
        <ve-ring
          :data="pieSetting.status.chartData"
          :settings="pieSetting.status.settings"
        ></ve-ring>
      </div>
      <div class="pie">
        <p class="title">FLEET ALERT</p>
        <ve-ring
          :data="pieSetting.alert.chartData"
          :settings="pieSetting.alert.settings"
        ></ve-ring>
      </div>
      <div class="pie">
        <p class="title">FLEET BATTERY</p>
        <ve-pie
          :data="pieSetting.battery.chartData"
          :settings="pieSetting.battery.chartSettings"
        ></ve-pie>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      pieSetting: {
        status: {
          chartData: {
            columns: ['Status', '访问用户'],
            rows: [
              { 'Status': 'In Use', '访问用户': 10 },
              { 'Status': 'Parked', '访问用户': 10 }
            ]
          },
          settings: {
            radius: [100, 80],
            hoverAnimation: false,
            label: {
            }
          }
        },
        alert: {
          chartData: {
            columns: ['Status', '访问用户'],
            rows: [
              { 'Status': 'User', '访问用户': 10 },
              { 'Status': 'Bicycle', '访问用户': 10 }
            ]
          },
          settings: {
            radius: [100, 80],
            hoverAnimation: false,
            label: {
            }
          }
        },
        battery: {
          chartData: {
            columns: ['text', 'battery'],
            rows: [
              { 'text': '0-10%', 'battery': 0 },
              { 'text': '11-20%', 'battery': 0 },
              { 'text': '21-30%', 'battery': 0 },
              { 'text': '21-30%', 'battery': 0 },
              { 'text': '31-40%', 'battery': 0 },
              { 'text': '41-50%', 'battery': 0 },
              { 'text': '91-100%', 'battery': 20 }
            ]
          },
          settings: {
            dimension: '日期',
            metrics: 'Status'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variable.scss';
$mapBoxHeight: 60vh;
$mapBoxTabletHeight: 50vh;
$titleHeight: 40px;
$mapPaddingVerticle: 20px;
$mapBoxMarginVerticle: 20px;
.fleet-location {
  margin: $mapBoxMarginVerticle 20px;
  padding: $mapPaddingVerticle;
  height: $mapBoxHeight;
  border: 1px solid $borderColor;
  background-color: #fff;
  box-sizing: border-box;
  p.title {
    height: $titleHeight;
  }
  iframe {
    display: block;
    height: calc(#{$mapBoxHeight} - #{$titleHeight} - #{$mapPaddingVerticle} * 2);
    width: 100%;
  }
}
.charts {
  $padding: 40px;
  height: calc(100vh - #{$topMenuHeight} - #{$topBreadcrumbHeight} - #{$mapBoxHeight} - #{$mapBoxMarginVerticle} * 2);
  width: 80%;
  margin: auto;
  font-size: 0;
  box-sizing: border-box;
  .pie {
    display: inline-block;
    width: calc((100% - #{$padding} * 2 ) / 3);
    padding: 20px;
    font-size: 1rem;
    border: 1px solid $borderColor;
    box-sizing: border-box;
    background-color: #fff;
    &:not(:last-child) {
      margin-right: $padding;
    }
    .title {
      margin-bottom: 20px;
    }
  }
}
@include mediaMax($pcWidth){
  .fleet-location {
    height: $mapBoxTabletHeight;
    iframe {
      height: calc(#{$mapBoxTabletHeight} - #{$titleHeight} - #{$mapPaddingVerticle} * 2);
    }
  }
  .charts {
    width: auto;
    margin: 20px;
    height: calc(100vh - #{$topMenuHeight} - #{$topBreadcrumbHeight} - #{$mapBoxTabletHeight} - #{$mapBoxMarginVerticle} * 2 - 20px );
    .pie {
      $padding: 20px;
      width: calc((100% - #{$padding} * 2 ) / 3);
      max-height: calc(100vh - #{$topMenuHeight} - #{$topBreadcrumbHeight} - #{$mapBoxTabletHeight} - #{$mapBoxMarginVerticle} * 2 - 20px );
      box-sizing: border-box;
      &:not(:last-child) {
        margin-right: $padding;
      }
      .ve-ring {
        max-width: 100%;
      }
    }
  }
}
@include mediaMax($mobileWidth){
  $mobileHeight: 350px;
  .fleet-location {
    height: $mobileHeight;
    margin-left: 0;
    margin-right: 0;
    iframe {
      height: calc(#{$mobileHeight} - #{$titleHeight} - #{$mapPaddingVerticle} * 2);
    }
  }
  .charts {
    margin-left: 0;
    margin-right: 0;
    .pie {
      width: 100%;
      max-height: inherit;
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
