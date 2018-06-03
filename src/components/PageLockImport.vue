<template>
  <div id="contract-info">
    <div class="page">
      <div class="title">
        <h2>IMPORT LOCK</h2>
        <div class="control">
          <button class="save" @click="popup.status = true">
            Save
          </button>
          <button class="cancel">
            <router-link :to="{name: 'PageLock'}">Cancel</router-link>
          </button>
        </div>
      </div>
      <div class="content">
        <div class="box">
          <div class="item">
            <p class="title">Import by CSV file</p>
            <div class="text">
              <input type="file" accept=".csv">
              <p class="summary">Download <a>csv template</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="popup" :class="{'active': popup.status}">
        <p class="title">提示窗</p>
        <p class="content">匯入失敗</p>
        <button class="confirm" @click="popup.status = false">confirm</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageLockImport',
  data () {
    return {
      popup: {
        status: false
      }
    }
  }
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
        &.cancel {
          background-color: #FE7A8F;
        }
      }
    }
  }
  > .content {
    font-weight: bold;
    padding-bottom: 50px;
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
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 50px;
    transform: translate(-50%, -50%);
    opacity: 0;
    max-width: 0;
    max-height: 0;
    overflow: hidden;
    display: none;
    border: 1px solid $borderColor;
    background-color: #fff;
    text-align: center;
    &.active {
      opacity: 1;
      max-width: 80vw;
      width: 500px;
      max-height: none;
      display: block;
    }
    .title {
      font-size: 2.5rem;
      margin-bottom: 50px;
    }
    .content {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }
    button.confirm {
      color: #fff;
      background-color: #124797;
      border-radius: 5px;
    }
  }
}
</style>
