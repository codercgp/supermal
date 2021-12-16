<template>
<div class="floor">
  <div class="floorHeader">
    <h3>家用电器</h3>
   <ul class="floorHeaderText">
     <li class="floorHeaderTextItem">
       热门<span>|</span>
     </li>
   </ul>
  </div>
  <div class="floorContent">
<!--    左边文字区域-->
    <div class="floorContentLeft">
      <div class="textTop">
        <span>节能补贴</span>
        <span>节能补贴</span>
        <span>节能补贴</span>
        <span>节能补贴</span>
        <span>节能补贴</span>
        <span>节能补贴</span>
      </div>
      <img src="./image/floor-1-1.png"/>
    </div>
<!--    轮播图区域-->
    <div class="swiper" style="overflow: hidden;">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in carouselList" :key="i.id"><img src="./image/floor-1-b01.png" /></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

    </div>
<!--    -->
    <div class="buying">
     <div class="buyingTop">
         <img src="./image/floor-1-2.png"/>
     </div>
      <div class="buyingBottom">
        <img src="./image/floor-1-3.png"/>
      </div>
    </div>
    <div class="contentImage">
      <img src="./image/floor-1-4.png">
    </div>
    <div class="buyingRight">
      <img src="./image/floor-1-5.png"/>
      <img src="./image/floor-1-6.png"/>
    </div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'floor',
  props: ['carouselList', 'keywords', 'navList', 'recommendList'],
  mounted () {
    var mySwiper = new Swiper('.swiper', {
      direction: 'horizontal', // 横向切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style lang="less" scoped>
.floor{
  margin:20px 150px;
  .floorHeader{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .floorHeaderText{
      list-style: none;
    }
  }
  .swiper{
    width: 329px;
    height: 360px;
    .swiper-wrapper{
      width: 329px;
      height: 360px;
    }
    .swiper-slide{
      width: 329px;
      height: 360px;
    }
  }
  .floorContent{
    border-top: 3px solid red;
    border-bottom: 1px solid #cccccc;
    display: flex;
    height: 360px;
    .floorContentLeft{
      width: 210px;
      height: 360px;
      background-color: #f7f7f7;
      .textTop{
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        span{
          border-bottom: 1px solid #cccccc;
          margin: 3px 15px;
          padding-bottom: 5px;
         font-size: 14px;
        }
      }
    }
    .buying{
      width: 220px;
      height: 100%;
      border-right: 1px solid #ccc;
      .buyingTop{
        border-bottom: 1px solid #ccc;
      }
    }
    .contentImage{
      border-right: 1px solid #ccc;
    }
    .buyingRight{
     img:nth-child(1){
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>
