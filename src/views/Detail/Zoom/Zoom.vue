<template>
  <div class="spec-preview">
    <img :src="skuDefaultImg.imgUrl" />
    <div class="event" @mousemove="movemask" ref="parent"></div>
    <div class="big" >
      <img  ref="bigImg" :src="skuDefaultImg.imgUrl" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'Zoom',
  props: ['skuImageList'],
  data () {
    return {
      currentIndex: 0
    }
  },
  computed: {
    skuDefaultImg () {
      return this.skuImageList[this.currentIndex] || {}
    }
  },
  mounted () {
    this.$bus.$on('getImage', (index) => {
      this.currentIndex = index
    })
  },
  methods: {
    movemask (event) {
      const bigImg = this.$refs.bigImg
      const mask = this.$refs.mask
      let myLeft = event.offsetX - mask.offsetWidth / 2
      if (myLeft <= 0) {
        myLeft = 0
      } else if (myLeft >= mask.offsetWidth) {
        myLeft = mask.offsetWidth
      }
      let myTop = event.offsetY - mask.offsetHeight / 2
      if (myTop <= 0) {
        myTop = 0
      } else if (myTop >= mask.offsetHeight) {
        myTop = mask.offsetTop
      }
      mask.style.left = myLeft + 'px'
      mask.style.top = myTop + 'px'
      bigImg.style.left = -myLeft * 2 + 'px'
      bigImg.style.top = -myTop * 2 + 'px'
    }
  }
}
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>
