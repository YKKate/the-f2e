<template>
  <div id="geo-fencing-edit" class="page">
    <header>
      <h2 class="title">GEO FENCE INFORMATION</h2>
      <p class="summary">Please add the settings of geo fence</p>
      <div class="control">
        <button class="save">Save</button>
        <button class="cancel">Cancel</button>
      </div>
    </header>
    <div class="content">
      <label>
        <p class="title">Geo Fence Name</p>
        <div class="item-content">
          <input type="text" v-model="addData.name">
          <p class="summary">Name can have alphanumric characters</p>
        </div>
      </label>
      <label>
        <p class="title">Status</p>
        <div class="item-content">
          <select v-model="addData.status">
            <option value="A" selected>啟用</option>
            <option value="B">B</option>
          </select>
          <p class="summary">Select intial status of fence</p>
        </div>
      </label>
      <label>
        <p class="title">Type</p>
        <div class="item-content">
          <select v-model="addData.type">
            <option value="A" selected>可停車狀態</option>
            <option value="B">B</option>
          </select>
          <p class="summary">Select typs of fence area</p>
        </div>
      </label>
      <label>
        <p class="title">Geo fence coordiantes</p>
        <div class="item-content">
          <p class="summary">A minimum of 3 coordiantes are required to create a fence</p>
          <div class="fields-box">
            <div class="header">
              <p class="index">Points</p>
              <p class="latitude">Latitude</p>
              <p class="longitude">Longitude</p>
              <p></p>
            </div>
            <div class="fields">
              <div v-for="(c, index) in coordiantes" :key="index" class="field">
                <p class="index">{{ index + 1 }}</p>
                <div class="latitude">
                  <input type="text" v-model="c.latitude">
                </div>
                <div class="longitude">
                  <input type="text" v-model="c.longitude">
                </div>
                <div class="delete">
                  <p @click="removeField(index)">-</p>
                </div>
              </div>
            </div>
            <button class="add-coordiante" @click="addFields">+</button>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageGeoFencingAdd',
  data () {
    return {
      addData: {
        name: '名聲路',
        status: 'A',
        type: 'A'
      },
      coordianteItem: {
        latitude: '',
        longitude: ''
      },
      coordiantes: []
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.coordiantes = []
      for (let i = 0; i < 3; i++) {
        let field = JSON.parse(JSON.stringify(this.coordianteItem))
        this.coordiantes.push(field)
      }
    })
  },
  methods: {
    addFields () {
      let field = JSON.parse(JSON.stringify(this.coordianteItem))
      this.coordiantes.push(field)
    },
    removeField (index) {
      this.coordiantes.splice(index, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/_variable.scss';
header {
  position: relative;
  margin-bottom: 20px;
  h2.title {
    font-weight: bold;
  }
  p.summary {
    color: $borderColor;
  }
  .control {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    &:after {
      content: '';
      display: block;
      clear: both;
    }
    button {
      padding: 5px 10px;
      border-color: transparent;
      border-radius: 5px;
      color: #fff;
      &.save {
        background-color: #124797;
        margin-right: 5px;
      }
      &.cancel {
        background-color: #FE7A8F;
      }
    }
  }
}
.page > .content {
  label {
    $titleWidth: 200px;
    display: block;
    width: 100%;
    margin-bottom: 30px;
    font-size: 0;
    p.title {
      display: inline-block;
      vertical-align: top;
      width: $titleWidth;
      font-size: 1rem;
      text-align: right;
    }
    .item-content {
      display: inline-block;
      vertical-align: top;
      padding-left: 20px;
      width: calc( 90% - #{$titleWidth});
      font-size: 1rem;
      box-sizing: border-box;
      input, select {
        width: 100%;
        height: 30px;
        padding: 5px;
        margin-bottom: 5px;
        border: 1px solid $borderColor;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 1rem;
      }
      .summary {
        color: $borderColor;
        margin-bottom: 5px;
      }
      .fields-box {
        text-align: center;
        .header {
          padding: 10px;
          font-weight: bold;
          background-color: #59931B;
          box-sizing: border-box;
          text-align: left;
        }
        $indexWidth: 80px;
        $deleteWidth: 80px;
        .fields {
          font-size: 0;
          padding: 10px 0;
          text-align: left;
        }
        .field {
          margin-bottom: 20px;
        }
        .index {
          width: $indexWidth;
          display: inline-block;
          vertical-align: middle;
          font-size: 1rem;
          text-align: center;
          font-weight: bold;
          box-sizing: border-box;
        }
        .latitude {
          display: inline-block;
          width: calc((100% - #{$indexWidth} - #{$deleteWidth}) / 2);
          padding: 0 10px;
          vertical-align: middle;
          font-size: 1rem;
          box-sizing: border-box;
          input {
            margin-bottom: 0;
            height: 30px;
          }
        }
        .longitude {
          display: inline-block;
          width: calc((100% - #{$indexWidth} - #{$deleteWidth}) / 2);
          padding: 0 10px;
          vertical-align: middle;
          font-size: 1rem;
          box-sizing: border-box;
          input {
            margin-bottom: 0;
            height: 30px;
          }
        }
        .delete {
          width: $deleteWidth;
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          box-sizing: border-box;
          p {
            display: inline-block;
            vertical-align: middle;
            height: 30px;
            line-height: 30px;
            width: 80%;
            color: #fff;
            font-size: 1.5rem;
            background-color: #FE7A8F;
          }
        }
        button.add-coordiante {
          display: inline-block;
          padding: 0 15px;
          height: 30px;
          border-color: transparent;
          color: #fff;
          font-weight: bold;
          background-color: #5470C8;
          font-size: 1.2rem;
          box-sizing: border-box;
          text-align: center;
        }
      }
    }
  }
}
@include mediaMax($mobileWidth){
  header {
    .control {
      position: relative;
      top: inherit;
      right: inherit;
      transform: none;
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: right;
    }
  }
  .page > .content {
    label {
      margin-bottom: 20px;
      p.title {
        display: block;
        width: 100%;
        text-align: left;
      }
      .item-content {
        display: block;
        width: 100%;
        padding-left: 0;
      }
    }
  }
}
</style>
