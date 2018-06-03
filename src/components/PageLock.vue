<template>
  <div id="lock">
    <button class="add">
      <router-link :to="{name: 'PageLockImport'}">Add New User</router-link>
    </button>
    <div class="search-box">
      <div class="chart">
        <chart-pie
          :data="pieSettion.data"
          :options="pieSettion.options"
        ></chart-pie>
      </div>
      <div class="labels">
        <label>
          <p>Lock ID</p>
          <input type="text" v-model="search.lockId">
        </label>
        <label>
          <p>Sigfox ID</p>
          <input type="text" v-model="search.sigfoxId">
        </label>
        <label>
          <p>RCZ</p>
          <select v-model="search.rcz">
            <option value="1" selected>1</option>
            <option value="2">2</option>
          </select>
        </label>
        <label>
          <p>Status</p>
          <select v-model="search.status">
            <option value="A" selected>A</option>
            <option value="B">B</option>
          </select>
        </label>
        <label>
          <p>Company</p>
          <input type="text" v-model="search.company">
        </label>
        <div class="control">
          <button class="search" @click="noData = !noData">Search</button>
          <p class="clear">clear</p>
        </div>
      </div>
    </div>
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
            <th>Lock ID
              <div class="sort">
                <i class="icon-triangle-up"></i>
                <i class="icon-triangle-down"></i>
              </div>
            </th>
            <th>Type
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
              <td></td>
              <td>
                <!-- <i class="icon-location" @click="popup.open = true"></i> -->
                <i class="view">
                  <router-link :to="{name: 'PageLockInfo'}">View</router-link>
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
        lockId: '',
        sigfoxId: '',
        rcz: '',
        status: '',
        company: ''
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
button.add {
  $btnMargin: 5px;
  $btnHeight: $topBreadcrumbHeight - $btnMargin * 2;
  position: fixed;
  top: $topMenuHeight + $btnMargin;
  left: 50%;
  height: $btnHeight;
  border-color: transparent;
  background-color: $btnColor;
  border-radius: 5px;
  transform: translateX(-50%);
  a {
    color: #fff;
    text-decoration: none;
  }
}
.search-box {
  $margin: $searchBoxMarginVerticle;
  $controlWidth: 200px;
  $chartsWidth: 150px;
  position: relative;
  height: $searchBoxHeight;
  margin: $margin;
  padding: 25px 30px + $controlWidth 25px 30px;
  border: 1px solid $borderColor;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 0;
  .chart {
    width: $chartsWidth;
    display: inline-block;
    vertical-align: middle;
    font-size: 1rem;
  }
  .labels {
    width: calc(100% - #{$chartsWidth});
    display: inline-block;
    vertical-align: middle;
    font-size: 0;
    padding: 20px 0;
    > * {
      display: inline-block;
      vertical-align: middle;
      font-size: 1rem;
    }
    label {
      width: 50%;
      margin-bottom: 30px;
      $pWidth: 100px;
      font-size: 0;
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        width: 33%;
      }
      > * {
        display: inline-block;
        vertical-align: middle;
        font-size: 1rem;
      }
      p {
        $marginRight: 5px;
        width: $pWidth - $marginRight;
        margin-right: $marginRight;
        text-align: right;
      }
      input, select {
        width: calc(100% - #{$pWidth} - 1px * 2);
        height: 25px;
        padding: 5px;
        border: 1px solid $borderColor;
        box-sizing: border-box;
        background-color: $bgColor;
        border-radius: 3px;
      }
    }
    .control {
      position: absolute;
      width: $controlWidth;
      right: 0;
      bottom: 10%;
      padding-right: 20px;
      transform: translateY(-50%);
      box-sizing: border-box;
      > * {
        display: inline-block;
        vertical-align: middle;
      }
      .search {
        border-color: transparent;
        color: #fff;
        background-color: $btnColor;
        border-radius: 5px;
        margin-right: 10px;
      }
      .clear {
        text-decoration: underline;
        font-size: 0.85rem;
      }
    }
  }
}
.result-list {
  $paddingVerticle: 25px;
  height: calc(100vh - #{$topMenuHeight} - #{$topBreadcrumbHeight} - #{$searchBoxHeight} - #{$searchBoxMarginVerticle} * 2 - #{$searchBoxMarginVerticle});
  overflow: hidden;
  padding: $paddingVerticle 30px;
  border: 1px solid $borderColor;
  background-color: #fff;
  box-sizing: border-box;
  margin: 0 $searchBoxMarginVerticle;
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
