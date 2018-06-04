<template>
  <div id="contract-info">
    <div class="page">
      <div class="title">
        <h2>USER INFORMATION</h2>
        <div class="control">
          <button class="edit">
            <router-link :to="{name: 'PageUserEdit'}">Edit</router-link>
          </button>
          <button class="history">
            <router-link :to="{name: 'PageUserHistory'}">History</router-link>
          </button>
        </div>
      </div>
      <div class="content">
        <div class="box">
          <div class="item">
            <p class="title">Account</p>
            <p class="text">Fox-tech</p>
          </div>
        </div>
        <div class="box">
          <div class="item">
            <p class="title">Status</p>
            <p class="text">Type</p>
          </div>
          <div class="item">
            <p class="title">Contract Name</p>
            <p class="text">Type something</p>
          </div>
          <div class="item">
            <p class="title">Status</p>
            <p class="text">contract</p>
          </div>
          <div class="item">
            <p class="title">Company Name</p>
            <p class="text">Fox</p>
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
        $titleWidth: 300px;
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
      .box {
        padding: 0;
        &:not(:last-child) {
          border-bottom: 0;
        }
        .item {
          padding: 10px 0;
          .title {
            display: block;
            width: 100%;
            text-align: left;
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
