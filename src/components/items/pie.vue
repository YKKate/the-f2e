<script>
import { Pie } from 'vue-chartjs'
import 'chart.piecelabel.js'
export default {
  extends: Pie,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
