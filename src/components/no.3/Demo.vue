<template>
  <ve-line
    :data="chartData"
    :settings="chartSettings"
  ></ve-line>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>
