<template>
  <div class="scroll-view" ref="wrapper">
    <div>
      <div>
        <div v-for="(item, index) in indexList" :key="index"
             style="flex: 0 0 100%; height: 50vw; background-color: #00bbff; margin-top: 1vw; display: flex; ">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core'
  import PullDown from '@better-scroll/pull-down'
  import ObserveDom from '@better-scroll/observe-dom'

  BScroll.use(ObserveDom)
  BScroll.use(PullDown)

  export default {
    data () {
      return {
        indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        const bsOptions = {
          scrollY: true,
          probeType: 3,
          bounce: false,
          stopPropagation: true,
          bindToWrapper: true,
          eventPassthrough: 'horizontal'
        }
        this.bs = new BScroll(this.$refs.wrapper, bsOptions)
      }
    }
  }
</script>

<style>
  .scroll-view {
    position: relative;
    width: 300px;
    height: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
