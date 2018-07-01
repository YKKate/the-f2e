<template>
  <div id="index">
    <h3 class="title">OVERVIEW</h3>
    <div class="boxes">
      <div
        v-for="(d, index) in dataArray"
        :key="index"
        :class="d.class"
        class="box"
      >
        <p class="title">
          <font-awesome-icon :icon="['fas',d.icon]"/>
          {{ d.text }}
        </p>
        <p
          :style="{'color': d.color}"
          class="number"
        >
          {{ numberWithCommas(d.value) }}
        </p>
      </div>
    </div>
    <div class="chart">
      <ve-line
        :data="chartData"
        :settings="chartSettings"
      ></ve-line>
    </div>
    <div class="boxes2">
      <div class="box">
        <p class="title">Transaction Website</p>
        <div class="item-box">
          <div class="item">
            <font-awesome-icon :icon="['fab', 'facebook']"/>
          </div>
          <div class="item">
            <font-awesome-icon :icon="['fab', 'google']"/>
          </div>
        </div>
      </div>
      <div class="box">
        <p class="title">Latest Orders</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataArray: [
        {
          text: 'TOTAL REVENUE',
          class: 'revenue',
          color: '#7ED321',
          icon: 'hand-holding-usd',
          value: 54540
        },
        {
          text: 'TOTAL COST',
          class: 'cost',
          color: '#D0021B',
          icon: 'cubes',
          value: 12600
        },
        {
          text: 'NET INCOME',
          class: 'income',
          color: '#4A90E2',
          icon: 'money-bill',
          value: 41880
        }
      ],
      chartSettings: {
        metrics: ['revenue', 'cost', 'income'],
        dimension: ['日期']
      },
      chartData: {
        columns: ['日期', 'revenue', 'cost', 'income'],
        rows: [
          { '日期': '6 JUN', 'revenue': 1393, 'cost': 1093, 'income': 3345 },
          { '日期': '7 JUN', 'revenue': 3530, 'cost': 3241, 'income': 2643 },
          { '日期': '8 JUN', 'revenue': 1353, 'cost': 2623, 'income': 2435 },
          { '日期': '9 JUN', 'revenue': 1723, 'cost': 1234, 'income': 1149 },
          { '日期': '10 JUN', 'revenue': 3792, 'cost': 3492, 'income': 2353 },
          { '日期': '11 JUN', 'revenue': 4593, 'cost': 5332, 'income': 5238 },
          { '日期': '12 JUN', 'revenue': 1232, 'cost': 2134, 'income': 1328 },
          { '日期': '13 JUN', 'revenue': 4593, 'cost': 4293, 'income': 2348 }
        ]
      }
    }
  },
  methods: {
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
  // components: { VeLine }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/no.3/_variable.scss';
#index {
  @include PCWidth;
}
h3.title {
  margin: 30px 0 20px;
  font-family: HelveticaNeue-Bold;
  @include rem('font-size', 24px);
}
.boxes {
  display: flex;
  margin-bottom: 18px;
  .box {
    flex: 1;
    padding: 25px 20px 30px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 10px 5px #EBEBEB;
    &:not(:last-child) {
      margin-right: 20px;
    }
    p.title {
      margin-bottom: 14px;
      font-family: HelveticaNeue-Medium;
      @include rem('font-size', 16px);
      svg {
        $size: 26px;
        width: $size;
        height: $size;
        margin-right: 8px;
      }
    }
    p.number {
      font-family: HelveticaNeue-Bold;
      @include rem('font-size', 36px);
    }
  }
}
.chart {
  padding: 30px 40px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px 5px #EBEBEB;
  > * {
    max-width: 100%;
    max-height: 100%;
  }
}
.boxes2 {
  display: flex;
  .box {
    flex: 1;
    padding: 30px 40px;
    box-shadow: 0 0 10px 5px #EBEBEB;
    border-radius: 3px;
    background-color: #fff;
    &:first-child {
      margin-right: 20px;
    }
    .title {
      font-family: HelveticaNeue-Bold;
      @include rem('font-size', 24px);
    }
  }
}
</style>
