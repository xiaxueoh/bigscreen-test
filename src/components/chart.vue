<template>
  <div :id="parentOptions.id" class="charts"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    parentOptions: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      myCharts: null,
      styleOptions: {
        // title: {
        //     text: '世界人口总量',
        //     subtext: '数据来自网络'
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        // legend: {
        //     data: ['2011年', '2012年']
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
        },
        series: [
          {
            type: 'bar',
          },
          {
            type: 'bar',
          },
        ],
      },
    }
  },
  watch: {
    'parentOptions.data': {
      handler(val) {
        if (val && Object.keys(val).length) {
        this.$nextTick(() => {
            console.log(val, 999)
          this.initChart()
          this.refresh(val)
        })
        }
      },
      immediate: true,
      deep: true
    },
  },
  methods: {
    initChart() {
      this.myCharts = echarts.init(
        document.getElementById(this.parentOptions.id)
      )
      this.myCharts.setOption(this.styleOptions)
    },
    refresh(data) {
      const { seriesData } = data
      const dataOptions = {
        series: seriesData,
      }
      this.myCharts.setOption(dataOptions)
    },
  },
}
</script>

<style>
.charts {
  width: 100%;
  height: 100%;
}
</style>
