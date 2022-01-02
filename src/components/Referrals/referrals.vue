<template>
<div class="referrals">
  <ul class="referralsList">
    <li class="referralsItem ">
      <img class="one" src="./image/clock.png">
      <span class="text">今日推荐</span>
    </li>
    <li class="referralsItem">
      <img src="./image/today01.png">
    </li>
    <li class="referralsItem">
      <img src="./image/today02.png">
    </li>
    <li class="referralsItem">
      <img src="./image/today03.png">
    </li>
    <li class="referralsItem">
      <img src="./image/today04.png">
    </li>
  </ul>
  <ul class="hotList">
    <li class="hotItem">
       <div class="hoticon"></div>
      <span class="hotText">热卖排行</span>
    </li>
    <li class="hotItem">
      <div class="hoticon"></div>
      <span class="hotText">特价排行</span>
    </li>
    <li class="hotItem">
      <div class="hoticon"></div>
      <span class="hotText">新品排行</span>
    </li>
  </ul>
  <ul class="shopinfoList">
    <li>
      <img src="./image/1.jpg">
    </li>
    <li>
      <img src="./image/1.jpg">
    </li>
    <li>
      <img src="./image/1.jpg">
    </li>
    <li>
      <img src="./image/1.jpg">
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'referrals'
}
</script>

<style  lang="less" scoped>
.referrals{
  width: 100%;
  margin-top: 500px;
  margin-left: 2%;

  .referralsList{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    .referralsItem{
      &:nth-child(1){
        background-color: #e4e4e4;
        width: 249px;
        height: 165px;
      }
   img{
     width: 249px;
     height: 165px;
   }
  .text{
       font-size: 20px;
    font-weight: bold;
      color: #fff;
    margin-left:90px ;
      }
  .one{
   width: 70px;
    height:70px;
   margin: 20px 90px;
  }
    }
  }
  .hotList{
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    .hotItem{
     display: flex;
      flex-direction: column;
       width: 100px;
      height: 78px;

      .hoticon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 50px;
        background-repeat: no-repeat;
      }
      .hotText{
        color: #cccccc;
      }
      &:nth-child(1) .hotText {
        color: red;
      }
   &:nth-child(1) .hoticon{
     width: 32px;
     overflow: hidden;
     background-image: url("./image/bg0.png");
     background-position: -32px ,10px;
   }
      &:nth-child(1) .hotText:hover{
        color: aquamarine;
      }
      &:nth-child(2) .hotText:hover{
        color: aquamarine;
      }
      &:nth-child(3) .hotText:hover{
        color: aquamarine;
      }
      &:nth-child(2) .hoticon{
        width: 32px;
        overflow: hidden;
        background-image: url("./image/bg0.png");
        background-position: 0px, 32px ,10px;

      }
      &:nth-child(3) .hoticon{
        width: 32px;
        overflow: hidden;
        background-image: url("./image/bg0.png");
        background-position:0px ,32px ,10px;
      }
    }
  }
  .shopinfoList{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  li{
    border: 1px solid orangered;
    margin-right: 25px;
    img{
      width: 230px;
      height: 210px;
      margin: 5px 20px 18px;
    }
  }
  }
}
</style>
