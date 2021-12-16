<template>
<div class="listcontainer">
   <div class="imgwarp">
     <div class="swiper-container">
       <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="item in bannerimages " :key="item.id"> <img :src="item.imgUrl"></div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>

       <!-- 如果需要导航按钮 -->
       <div class="swiper-button-prev"></div>
       <div class="swiper-button-next"></div>
     </div>
   </div>
  <div class="right">
    <div class="news">
      <div class="newsLeft">尚品汇快报</div>
      <div class="newRight">更多 ></div>
    </div>
   <ul class="newsitem">
     <li>
     <span class="bold">【特惠】</span><span>备战开学季 全民半价购数码</span>
     </li>
     <li>
       <span class="bold">【公告】</span><span>备战开学季 全民半价购数码</span>
     </li>
     <li>
       <span class="bold">【特惠】</span><span>备战开学季 全民半价购数码</span>
     </li>
     <li>
       <span class="bold">【特惠】</span><span>备战开学季 全民半价购数码</span>
     </li>
     <li>
       <span class="bold">【特惠】</span><span>备战开学季 全民半价购数码</span>
     </li>
   </ul>
  <ul class="liveserves">
    <li class="liveItem">
     <i class="liveList">
       <span>话费</span>
     </i>
    </li>
    <li class="liveItem">
      <i class="liveList">
        <span>话费</span>
      </i>
    </li>
    <li class="liveItem">
      <i class="liveList">
        <span>话费</span>
      </i>
    </li>
    <li class="liveItem">
      <i class="liveList">
        <span>话费</span>
      </i>
    </li>
    <li class="liveItem">
      <i class="liveList">
        <span>话费</span>
      </i>
    </li><li class="liveItem">
    <i class="liveList">
      <span>话费</span>
    </i>
  </li><li class="liveItem">
    <i class="liveList">
      <span>话费</span>
    </i>
  </li><li class="liveItem">
    <i class="liveList">
      <span>话费</span>
    </i>
  </li><li class="liveItem">
    <i class="liveList">
      <span>话费</span>
    </i>
  </li>
    <li class="liveItem">
      <i class="liveList">
        <span>话费</span>
      </i>
    </li>
    <li class="liveItem">
      <i class="liveList">
        <span>话费</span>
      </i>
    </li>
    <li class="liveItem">
      <i class="liveList">
        <span>话费</span>
      </i>
    </li>
  </ul>
    <img  class="rightimage" src="./imgage/ad1.png">
  </div>
 </div>
</template>

<script>
import Swiper from 'swiper'
import { mapState } from 'vuex'
export default {
  name: 'listcontainer',
  mounted () {
    this.$store.dispatch('getimages')
  },
  computed: {
    ...mapState({
      bannerimages: (state) => state.home.bannerimages
    })
  },
  watch: {
    bannerimages (newvalue, oldvalue) {
      this.$nextTick(() => {
        var mySwiper = new Swiper('.swiper-container', {
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
      })
    }
  }

}
</script>

<style  lang="less" scoped>
.listcontainer{
  width: 1050px;
  height: 450px;
  margin-left: 21%;
  margin-top: 11%;
  .imgwarp{
    width: 800px;
    height:450px;
    //background: red;
    .swiper-container {
      width: 800px;
      height:450px;
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
  .right{
    width: 240px;
    height:100%;
    float: right;
    margin-top: -445px;
    border:1px solid #ccc;
    box-sizing: border-box;
    .news{
      width: 238px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      .newsLeft{
        margin-left: 20px;
        font-size: 14px;
        font-weight: bold;
      }
      .newRight{
        font-size: 12px;
        margin-right: 10px;
      }
    }
    .newsitem{
      list-style: none;
      font-size: 12px;
      li{
        margin-bottom: 5px;
      }
      .bold{
        font-weight: bold;
      }
    }
    .liveserves{
     display: flex;
      flex-wrap: wrap;
      list-style: none;
      .liveItem {
        box-sizing: border-box;
        border-left: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        //margin-right: -1px;
        height: 64px;
        text-align: center;
        position: relative;
        cursor: pointer;
        width: 25%;
        .liveList{
          background-image: url(~@/assets/images/icons.png);
          width: 61px;
          height: 40px;
          display: block;
          span{
              line-height: 100px;
              width: 60px;
              display: block;
             font-size: 12px;
            font-style: normal;
          }
        }
      }
    }
    .rightimage{
      width: 100%;
      height: 100px;
      margin-top: 2px;
    }
  }
}
</style>
