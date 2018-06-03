<template>
  <div id="fleet-contract-history">
    <div class="result-list">
      <div class="table">
        <table>
          <thead>
            <th>No.</th>
            <th>Timestamp
              <div class="sort">
                <i class="icon-triangle-up"></i>
                <i class="icon-triangle-down"></i>
              </div>
            </th>
            <th>Item
              <div class="sort">
                <i class="icon-triangle-up"></i>
                <i class="icon-triangle-down"></i>
              </div>
            </th>
            <th>Action</th>
          </thead>
          <tbody v-if="!noData">
            <tr v-for="i in 10" :key="i">
              <td></td>
              <td></td>
              <td></td>
              <td>
                <!-- <i class="icon-location" @click="popup.open = true"></i> -->
                <i class="view">
                  <router-link :to="{name: 'PageFleetContractHistoryInfo'}">View</router-link>
                </i>
              </td>
            </tr>
          </tbody>
          <p v-if="noData" class="error">Error Text</p>
        </table>
      </div>
      <div class="control">
        <select class="page">
          <option value="1" selected>1</option>
          <option value="2">2</option>
        </select>
        <div class="pagination">
          <button class="prev">Prev</button>
          <button class="next">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pie from '@/components/items/pie'
export default {
  name: 'PageFleetContract',
  data () {
    return {
      search: {
        name: '',
        company: '',
        status: '',
        area: ''
      },
      noData: false,
      pieSettion: {
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
  },
  components: {
    'chart-pie': pie
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/_variable.scss';
$searchBoxHeight: 200px;
$searchBoxMarginVerticle: 20px;
$controlHeight: 40px;
$btnColor: #124797;
.result-list {
  $paddingVerticle: 25px;
  $marginVerticle: 30px;
  height: calc(100vh - #{$topMenuHeight} - #{$topBreadcrumbHeight} - #{$marginVerticle} * 2);
  overflow: hidden;
  padding: $paddingVerticle 30px;
  border: 1px solid $borderColor;
  background-color: #fff;
  box-sizing: border-box;
  margin: $marginVerticle $searchBoxMarginVerticle;
  .table {
    position: relative;
    height: calc(100% - #{$controlHeight});
    overflow: scroll;
    .error {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: red;
    }
  }
  table {
    width: 100%;
    thead {
      border-bottom: 1px solid $borderColor;
      th {
        padding-bottom: 10px;
        .sort {
          position: relative;
          display: inline-block;
          height: 23px;
          width: 30px;
          text-align: center;
          vertical-align: middle;
          i {
            position: absolute;
            left: 0;
            font-size: 0.9rem;
            color: $borderColor;
            &.icon-triangle-up {
              top: 0;
            }
            &.icon-triangle-down {
              bottom: 0;
            }
          }
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid $borderColor;
      }
      td {
        text-align: center;
        padding: 10px;
        box-sizing: border-box;
        i.icon-location {
          display: inline;
          vertical-align: middle;
          color: #F2453E;
          font-size: 1.5rem;
        }
        i.view {
          display: inline;
          vertical-align: middle;
          padding: 5px 10px;
          background-color: #59931B;
          font-size: 0.9rem;
          border-radius: 5px;
          a {
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }
  }
  .control {
    $paddingVerticle: 10px;
    height: $controlHeight;
    position: relative;
    select {
      width: 100px;
      height: $controlHeight - $paddingVerticle * 2;
      margin-top: $paddingVerticle;
      border: 1px solid $borderColor;
      background-color: $bgColor;
    }
    .pagination {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      button {
        border-color: transparent;
        color: #fff;
        background-color: $btnColor;
        border-radius: 5px;
        font-size: 0.85rem;
      }
    }
  }
}
@include mediaMax($pcWidth){
  button.add {
    right: 10px;
    left: inherit;
    transform: none;
  }
  .search-box {
    padding: 10px;
    width: 95%;
    height: auto;
    max-width: 100vw;
    margin-right: auto;
    margin-left: auto;
    text-align: right;
    label {
      $pWidth: 100px;
      width: 100%;
      margin-right: 0;
      font-size: 0;
      margin-bottom: 15px;
      text-align-last: left;
      p {
        width: $pWidth;
        font-size: 1rem;
        margin-right: 0;
        text-align: right;
        padding-right: 10px;
        box-sizing: border-box;
      }
      input, select {
        width: calc(100% - #{$pWidth} - 1px * 2);
        font-size: 1rem;
      }
    }
    .control {
      position: relative;
      top: inherit;
      right: inherit;
      transform: none;
    }
  }
  .result-list {
    width: 95%;
    max-width: 100vw;
    overflow: auto;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
  }
}
@include mediaMax($mobileWidth){
  #fleet-contract {
    text-align: right;
  }
  button.add {
    position: relative;
    top: inherit;
    right: inherit;
    display: inline-block;
    margin: 10px 10px 0 10px;
  }
  .search-box {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
