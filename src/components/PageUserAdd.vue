<template>
  <div id="user-add">
    <div class="page">
      <div class="title">
        <h2>USER INFORMATION</h2>
        <div class="control">
          <button class="save" @click="errorText">Save</button>
          <button class="cancel"><router-link :to="{name: 'PageUser'}">Cancel</router-link></button>
        </div>
      </div>
      <div class="content">
        <div class="box">
          <div class="item" :class="{'error': add.account.error}">
            <p class="title">Account</p>
            <div class="text">
              <input type="text" v-model="add.account.value">
              <p class="error-text">{{ add.account.errorText }}</p>
            </div>
          </div>
          <div class="item" :class="{'error': add.status.error}">
            <p class="title">Status</p>
            <div class="text">
              <select v-model="add.status.value">
                <option value="A" selected>A</option>
                <option value="B">B</option>
              </select>
              <p class="error-text">{{ add.status.errorText }}</p>
            </div>
          </div>
          <div class="item" :class="{'error': add.contract.error}">
            <p class="title">Contract Name</p>
            <div class="text">
              <input type="text" v-model="add.contract.value">
              <p class="error-text">{{ add.contract.errorText }}</p>
            </div>
          </div>
          <div class="item" :class="{'error': add.company.error}">
            <p class="title">Company Name</p>
            <div class="text">
              <input type="text" v-model="add.company.value">
              <p class="error-text">{{ add.company.errorText }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="popup" :class="{'active': popup.status}">
        <h2>User Information</h2>
        <div class="box">
          <div class="item">
            <p class="title">Name</p>
            <p class="text">{{ add.account.value }}</p>
          </div>
          <div class="item">
            <p class="title">Status</p>
            <p class="text">{{ add.status.value }}</p>
          </div>
          <div class="item">
            <p class="title">Contract Name</p>
            <p class="text">{{ add.contract.value }}</p>
          </div>
          <div class="item">
            <p class="title">Company Name</p>
            <p class="text">{{ add.company.value }}</p>
          </div>
        </div>
        <div class="controls">
          <button class="save" @click="saveAdd">Save</button>
          <button class="cancel" @click="cancelAdd">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageUserAdd',
  data () {
    return {
      errorMode: false,
      add: {
        account: {
          value: '',
          error: false,
          errorText: ''
        },
        status: {
          value: '',
          error: false,
          errorText: ''
        },
        contract: {
          value: '',
          error: false,
          errorText: ''
        },
        company: {
          value: '',
          error: false,
          errorText: ''
        }
      },
      popup: {
        status: false
      },
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
  methods: {
    errorText () {
      let changeArray = Object.keys(this.add)
      if (this.errorMode) {
        this.popup.status = true
        changeArray.forEach(a => {
          this.add[a].error = false
          this.add[a].errorText = ''
        })
      } else {
        changeArray.forEach(a => {
          this.add[a].error = true
          this.add[a].errorText = 'ERROR TEXT'
        })
      }
      this.errorMode = !this.errorMode
    },
    saveAdd () {
      this.$router.push({name: 'PageUser'})
    },
    cancelAdd () {
      this.popup.status = false
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
    p.notice {
      position: absolute;
      top: 50%;
      left: 40%;
      color: red;
      transform: translate(-50%, -50%);
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
        &.save {
          background-color: #124797;
        }
        &.cancel {
          background-color: #FE7A8F;
        }
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
          $textPaddingLeft: 40px;
          position: relative;
          width: calc(100% - #{$titleWidth});
          display: inline-block;
          padding-left: $textPaddingLeft;
          vertical-align: middle;
          font-size: 1rem;
          box-sizing: border-box;
          > input, select {
            height: 30px;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid $borderColor;
            box-sizing: border-box;
          }
          input , select{
            width: 100%;
          }
          .summary {
            font-weight: normal;
            color: $borderColor;
            font-size: 0.9rem;
            margin-top: 5px;
          }
          p.error-text {
            position: absolute;
            top: calc(100% + 5px);
            left: $textPaddingLeft + 5px;
            color: red;
            font-size: 0.85rem;
            opacity: 0;
            transition: opacity .3s;
          }
        }
        &.error {
          .text {
            > input, select {
              border-color: red;
            }
            p.error-text {
              opacity: 1;
            }
            span {
              input {
                border-color: red;
              }
            }
          }
        }
      }
    }
  }
  > .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 15px;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    border: 1px solid $borderColor;
    box-sizing: border-box;
    background-color: #fff;
    max-width: 0;
    max-height: 0;
    overflow: hidden;
    position: 0;
    display: none;
    z-index: 0;
    &.active {
      min-width: 50vw;
      max-width: 90vw;
      max-height: 80vh;
      overflow-y: auto;
      opacity: 1;
      display: block;
      z-index: 100;
    }
    h2 {
      text-align: center;
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 30px;
    }
    .box {
      padding: 10px 0;
      font-weight: bold;
      .item {
        $titleWidth: 150px;
        position: relative;
        padding: 15px 0;
        font-size: 0;
        .title {
          width: $titleWidth;
          display: inline-block;
          font-size: 1rem;
          text-align: right;
        }
        .text {
          width: calc(100% - #{$titleWidth});
          display: inline-block;
          padding-left: 20px;
          font-size: 1rem;
          box-sizing: border-box;
        }
        .days {
          position: absolute;
          left: 60%;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1rem;
          .day {
            margin-left: 10px;
            margin-right: 10px;
          }
        }
      }
    }
    .controls {
      margin-top: 150px;
      text-align: center;
      button {
        display: inline-block;
        padding: 8px 10px;
        border-radius: 5px;
        color: #fff;
        background-color: #124797;
        border-color: transparent;
        line-height: 1;
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
        text-align: right;
      }
    }
    > .content {
      .box {
        .item {
          padding: 10px 0;
          .title {
            display: block;
            position: relative;
            width: 100%;
            margin-bottom: 5px;
            font-size: 1.1rem;
            text-align: left;
          }
          .text {
            display: block;
            width: 100%;
            padding-left: 0;
            font-weight: normal;
            p.error-text {
              right: 0;
              left: inherit;
            }
          }
        }
      }
    }
    > .popup {
      width: 95vw;
      h2 {
        font-size: 2rem;
        margin-bottom: 20px;
      }
      .box {
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
            text-align: left;
            padding-left: 0;
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
#contract-add {
  .vdp-datepicker {
    input {
      height: 30px;
    }
  }
  .error {
    .vdp-datepicker {
      input {
        border-color: red;
      }
    }
  }
}
</style>
