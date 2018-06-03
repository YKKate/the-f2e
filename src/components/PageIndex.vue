<template>
  <div id="index">
    <div class="fleet-location">
      <p class="title">FLEET LOCATION</p>
      <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=103台北市中正區鄭州路8號&output=embed&t="></iframe>
    </div>
    <div class="charts">
      <div class="pie">
        <p class="title">FLEET STATUS</p>
        <chart-doughnut
          :data="pieSettion.status.data"
          :options="pieSettion.status.options"
        ></chart-doughnut>
      </div>
      <div class="pie">
        <p class="title">FLEET ALERT</p>
        <chart-pie
          :data="pieSettion.alert.data"
          :options="pieSettion.alert.options"
        ></chart-pie>
      </div>
      <div class="pie">
        <p class="title">FLEET BATTERY</p>
        <chart-pie
          :data="pieSettion.battery.data"
          :options="pieSettion.battery.options"
        ></chart-pie>
      </div>
    </div>
  </div>
</template>
<script>
import pie from '@/components/items/pie'
export default {
  name: 'PageIndex',
  data () {
    return {
      pieSettion: {
        status: {
          data: {
            labels: [ ['Contracted', 50], ['cancellation', 50] ],
            datasets: [
              {
                backgroundColor: [
                  '#CE3134',
                  '#81D235'
                ],
                data: [50, 50]
              }
            ]
          },
          options: {
            responsive: true,
            legend: {
              display: false
            },
            pieceLabel: {
              render: function (args) {
                return args.label + '\n\n' + args.percentage
              },
              mode: 'percentage',
              fontColor: '#555',
              precision: 0,
              overlap: true
            }
          }
        },
        alert: {
          data: {
            labels: [ ['Contracted', 50], ['cancellation', 50] ],
            datasets: [
              {
                backgroundColor: [
                  '#CE3134',
                  '#81D235'
                ],
                data: [50, 50]
              }
            ]
          },
          options: {
            responsive: true,
            legend: {
              display: false
            },
            pieceLabel: {
              render: function (args) {
                return args.label + '\n\n' + args.percentage
              },
              mode: 'percentage',
              fontColor: '#555',
              precision: 0,
              overlap: true
            }
          }
        },
        battery: {
          data: {
            labels: [ ['Contracted', 50], ['cancellation', 50] ],
            datasets: [
              {
                backgroundColor: [
                  '#CE3134',
                  '#81D235'
                ],
                data: [50, 50]
              }
            ]
          },
          options: {
            responsive: true,
            legend: {
              display: false
            },
            pieceLabel: {
              render: function (args) {
                return args.label + '\n\n' + args.percentage
              },
              mode: 'percentage',
              fontColor: '#555',
              precision: 0,
              overlap: true
            }
          }
        }
      }
    }
  },
  components: {
    'chart-pie': pie
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variable.scss';
$mapBoxHeight: 50vh;
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
    &:not(:last-child) {
      margin-right: $padding;
    }
    .title {
      margin-bottom: 20px;
    }
  }
}
</style>
