<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in getImg" :key="item.id"  @click="imageHeader(index)" :class="{active:acitiveindex==index}">
        <img :src="item.imgUrl" >
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

import Swiper from 'swiper'
export default {
  name: 'ImageList',
  props: ['skuImageList'],
  data () {
    return {
      acitiveindex: '0'
    }
  },
  computed: {
    getImg () {
      return this.skuImageList || []
    }
  },
  watch: {
    skuImageList (newValue, oldValue) {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          // 设置slider容器能够同时显示的slides数量(carousel模式)。同一页几张图片
          slidesPerView: 3,
          // 每一次切换图片个数
          slidesPerGroup: 1,
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }

        })
      })
    }
  },
  methods: {
    imageHeader (index) {
      this.$bus.$emit('getImage', index)
      this.acitiveindex = index
    }
  }
}
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        &:hover {
          border: 2px solid #f60;
          padding: 1px;
        }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>
