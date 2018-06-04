<template>
  <div id="contract-info">
    <div class="page">
      <div class="title">
        <h2>{COMPANY}'s CONTRACT INFORMATION</h2>
        <p class="summary">Please add the infrmation of the contract</p>
        <div class="control">
          <button class="edit">
            <router-link :to="{name: 'PageFleetContractEdit'}">Edit</router-link>
          </button>
          <button class="history">
            <router-link :to="{name: 'PageFleetContractHistory'}">History</router-link>
            </button>
        </div>
      </div>
      <div class="content">
        <div class="box">
          <div class="item">
            <p class="title">Contract Name</p>
            <p class="text">Taipei Fox-tech</p>
          </div>
        </div>
        <div class="box">
          <div class="item">
            <p class="title">Company</p>
            <p class="text">Taipei Fox-tech</p>
          </div>
          <div class="item">
            <p class="title">Company Address</p>
            <p class="text">新北市板橋區民生路一段</p>
          </div>
          <div class="item">
            <p class="title">Contract Person</p>
            <p class="text">Gray</p>
          </div>
          <div class="item">
            <p class="title">Phone</p>
            <p class="text">0912345678</p>
          </div>
          <div class="item">
            <p class="title">E-mail</p>
            <p class="text">User@gmail.com</p>
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
@include mediaMax($pcWidth){
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
      width: 95%;
      margin: auto;
      .box {
        padding: 0;
        &:not(:last-child) {
          border-bottom: none;
        }
        .item {
          padding: 10px 0;
          .title {
            width: 100%;
            text-align: left;
            margin-bottom: 5px;
            font-size: 1.1rem;
          }
          .text {
            width: 100%;
            padding-left: 0;
            font-weight: normal;
            span {
              position: relative;
              right: inherit;
              top: inherit;
              transform: none;
              margin-left: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
