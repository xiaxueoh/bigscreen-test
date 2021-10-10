<template>
  <div class="screen-box">
    <div class="left">
      <div v-for="item in list" :key="item.id" class="score">
        <chart :parentOptions="item"></chart>
      </div>
    </div>
    <button @click="handleClick(0)">第一按钮</button>
    <button @click="handleClick(1)">第二按钮</button>
  </div>
</template>

<script>
import chart from '../../src/components/chart.vue'
export default {
  components: {
    chart,
  },
  data() {
    return {
      list: [
        {
          id: '1-1-1',
        },
        {
          id: '2-2-2',
        },
      ],
    }
  },
  methods: {
    handleClick(index) {
      if (index === 0) {
        if (this.list[index].data) {
          this.list[index].data = {}
         setTimeout(() => {
            const data = {
            seriesData: [
              {
                name: '2011年',
                data: [123, 32, 312, 13, 123, 2]
              },
              {
                name: '2012年',
                data: [23, 2, 1, 5324, 32, 34]
              }
            ],
          }
          this.$set(this.list[index], 'data', data)
         }, 2000)
         return
        }
        const data = {
          seriesData: [
            {
              name: '2011年',
              data: [18203, 23489, 29034, 104970, 131744, 630230],
            },
            {
              name: '2012年',
              data: [181233, 23289, 223434, 4970, 1144, 13430],
            },
          ],
        }
        this.$set(this.list[index], 'data', data)
      }

      if (index === 1) {
        const data = {
          seriesData: [
            {
              name: '2011年',
              data: [345, 34, 234, 23, 12, 123],
            },
            {
              name: '2012年',
              data: [123, 2, 423, 54, 43, 34],
            },
          ],
        }
        this.$set(this.list[index], 'data', data)
      }
      // this.list[index].data = {}
      console.log(this.list, Object.keys(this.list[index].data).length, 66666)
    },
  },
  mounted() {},
}
</script>

<style lang="less">
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.screen-box {
  height: 100%;
  width: 100%;
  min-height: 500px;
  min-width: 1200px;
  box-sizing: border-box;
  overflow: scroll;
  display: flex;
  background-color: #000431;
  .left {
    width: 25%;
    height: 100%;
    // background-color: pink;
    .score {
      width: 100%;
      height: 30%;
    }
  }
}
</style>
