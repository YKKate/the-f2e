<template>
  <div id="contract-info">
    <div class="page">
      <div class="title">
        <h2>LOCK HISTORY INFORMATION</h2>
        <div class="control">
          <button class="back">
            <router-link :to="{name: 'PageLockHistory'}">Back</router-link>
          </button>
        </div>
      </div>
      <div class="content">
        <div class="box">
          <div class="item">
            <p class="title">Item</p>
            <p class="text"></p>
          </div>
        </div>
        <div class="box">
          <div class="item">
            <p class="title">Reason</p>
            <p class="text"></p>
          </div>
          <div class="item">
            <p class="title">Lock ID</p>
            <p class="text"></p>
          </div>
          <div class="item">
            <p class="title">RCZ</p>
            <p class="text">4</p>
          </div>
          <div class="item">
            <p class="title">Sigfox ID</p>
            <p class="text">0000000</p>
          </div>
          <div class="item">
            <p class="title">Status</p>
            <p class="text">Contract</p>
          </div>
          <div class="item">
            <p class="title">Company</p>
            <p class="text">Fox-Tech</p>
          </div>
          <div class="item">
            <p class="title">Blue tooth UUID</p>
            <p class="text"></p>
          </div>
        </div>
        <div class="box">
          <div class="item">
            <p class="title">Contract Area</p>
            <p class="text">Taiwan</p>
          </div>
          <div class="item">
            <p class="title">Start Time</p>
            <p class="text">2018-02-30<span>Days<i>10</i>day</span></p>
          </div>
          <div class="item">
            <p class="title">End Time</p>
            <p class="text">2018-03-10</p>
          </div>
          <div class="item">
            <p class="title">Status</p>
            <p class="text">Taipei Fox-tech</p>
          </div>
        </div>
        <div class="box">
          <div class="item">
            <p class="title">Lock</p>
            <p class="text">00123456789</p>
          </div>
          <div class="item">
            <p class="title">User Name</p>
            <p class="text">Fox-tech</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageFleetContractInfo'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_variable.scss';
.page {
  > .title {
    position: relative;
    margin-bottom: 20px;
    h2 {
      font-weight: bold;
      margin-bottom: 5px;
    }
    p.summary {
      color: $borderColor;
    }
    .control {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      button {
        border-color: none;
        border-radius: 5px;
        color: #fff;
        background-color: #124797;
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
  > .content {
    font-weight: bold;
    .box {
      padding: 10px 0;
      &:not(:last-child) {
        border-bottom: 1px solid $borderColor;
      }
      .item {
        $titleWidth: 250px;
        font-size: 0;
        padding: 25px 0;
        position: relative;
        .title {
          width: $titleWidth;
          display: inline-block;
          vertical-align: middle;
          font-size: 1rem;
          text-align: right;
        }
        .text {
          width: calc(100% - #{$titleWidth});
          display: inline-block;
          padding-left: 40px;
          vertical-align: middle;
          font-size: 1rem;
          box-sizing: border-box;
          span {
            position: absolute;
            right: 40%;
            top: 50%;
            transform: translateY(-50%);
            i {
              margin: 0 20px;
            }
          }
        }
      }
    }
  }
}
@include mediaMax($mobileWidth){
  .page {
    > .title {
      .control {
        position: relative;
        right: inherit;
        top: inherit;
        transform: none;
        margin-top: 10px;
      }
    }
    > .content {
      .box {
        padding: 0;
        &:not(:last-child) {
          border-bottom: none;
        }
        .item {
          padding: 10px 0;
          .title {
            display: block;
            width: 100%;
            text-align: left;
            margin-bottom: 5px;
            font-size: 1.1rem;
          }
          .text {
            display: block;
            width: 100%;
            padding-left: 0;
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>
