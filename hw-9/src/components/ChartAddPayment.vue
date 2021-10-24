<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  name: 'ChartAddPayment',
  props: ['chartData', 'options'],
  methods: {
    update () {
      this.$data._chart.update()
    },
    rerender () {
      this._chart.destroy()
      this.renderChart(this.chartData, this.options)
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    chartData () {
      this.rerender()
    },
    options () {
      this.rerender()
    }
  }
}
</script>
