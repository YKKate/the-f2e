<template>
  <div id="bicycle-fleet-in-use">
    <div class="search-box">
      <label>
        <p>Start Date</p>
        <datepicker
          :format="customFormatter"
          v-model="search.startDate"
        ></datepicker>
      </label>
      <label>
        <p>EndDate</p>
        <datepicker
          :format="customFormatter"
          v-model="search.endDate"
        ></datepicker>
      </label>
      <label>
        <p>Bicycle ID</p>
        <datepicker
          :format="customFormatter"
          v-model="search.bicycleId"
        ></datepicker>
      </label>
      <div class="control">
        <label>
          <input type="checkbox">
          <p>All this Page</p>
        </label>
        <button class="search" @click="noData = !noData">Search</button>
        <p class="clear">clear</p>
      </div>
    </div>
    <div class="map">
      <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=103台北市中正區鄭州路8號&output=embed&t="></iframe>
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
            <th>Bicycle ID
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
                <i class="icon-location" @click="popup.open = true"></i>
                <!-- <i class="view">
                  <router-link :to="{name: 'PageFleetHistoryRoute'}">View</router-link>
                </i> -->
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
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
moment.locale('zh-TW')
export default {
  name: 'PageBicycleFleetStatusUse',
  data () {
    return {
      search: {
        startDate: '',
        endDate: '',
        bicycleId: ''
      },
      noData: false
    }
  },
  methods: {
    customFormatter (date) {
      return moment(date).format('YYYY.MM.DD')
    }
  },
  components: {
    Datepicker
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/_variable.scss';
$searchBoxHeight: 75px;
$searchBoxMarginVerticle: 20px;
$controlHeight: 40px;
$btnColor: #124797;
$mapHeight: 40vh;
$mapMarginBottom: 20px;
.search-box {
  $margin: $searchBoxMarginVerticle;
  $controlWidth: 300px;
  position: relative;
  height: $searchBoxHeight;
  margin: $margin 0;
  padding: 25px 30px + $controlWidth 25px 30px;
  border: 1px solid $borderColor;
  background-color: #fff;
  box-sizing: border-box;
  > * {
    display: inline-block;
    vertical-align: middle;
  }
  > label {
    margin-right: 40px;
    > * {
      display: inline-block;
      vertical-align: middle;
    }
    p {
      margin-right: 5px;
    }
    > input, select {
      width: 150px;
      height: 25px;
      padding: 5px;
      border: 1px solid $borderColor;
      box-sizing: border-box;
      background-color: $bgColor;
      border-radius: 3px;
    }
    .vdp-datepicker {
      width: 150px;
    }
  }
  .control {
    position: absolute;
    width: $controlWidth;
    right: 0;
    top: 50%;
    padding-right: 20px;
    transform: translateY(-50%);
    box-sizing: border-box;
    > * {
      display: inline-block;
      vertical-align: middle;
    }
    label {
      > * {
        display: inline-block;
        vertical-align: middle;
      }
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
.map {
  height: $mapHeight;
  width: 100%;
  margin-bottom: $mapMarginBottom;
  iframe {
    height: 100%;
    width: 100%;
  }
}
.result-list {
  $paddingVerticle: 25px;
  height: calc(100vh - #{$topMenuHeight} - #{$topBreadcrumbHeight} - #{$searchBoxHeight} - #{$searchBoxMarginVerticle} * 2 - #{$mapHeight} - #{$mapMarginBottom} - #{$searchBoxMarginVerticle});
  overflow: hidden;
  padding: $paddingVerticle 30px;
  border: 1px solid $borderColor;
  background-color: #fff;
  box-sizing: border-box;
  // margin: 0 $searchBoxMarginVerticle;
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
  .search-box {
    padding: 10px;
    width: 95%;
    height: auto;
    max-width: 100vw;
    margin-right: auto;
    margin-left: auto;
    text-align: right;
    > label {
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
  .search-box {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
