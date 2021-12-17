<template>
<div class="footer">
<div class="shopinfo">
  <ul class="shopList">
    <li >购物指南</li>
    <li>购物介绍</li>
    <li>会员介绍</li>
    <li>生活旅行/团购</li>
    <li>常见问题</li>
    <li>购物指南</li>
  </ul>
  <ul class="shopList">
    <li >配送方式</li>
    <li>上门自提</li>
    <li>211限时达</li>
    <li>配送服务查询</li>
    <li>配送服务收取标准</li>
    <li>海外配送</li>
  </ul>
  <ul class="shopList">
    <li >支付方式</li>
    <li>货到付款</li>
    <li>在线支付</li>
    <li>分期付款</li>
    <li>邮局汇款</li>
    <li>公司转账</li>
  </ul>
  <ul class="shopList">
    <li >售后服务</li>
    <li>售后政策</li>
    <li>价格保护</li>
    <li>退款说明</li>
    <li>返修/退换货</li>
    <li>取消订单</li>
  </ul>
  <ul class="shopList">
    <li >特色服务</li>
    <li>夺宝岛</li>
    <li>DIY装机</li>
    <li>延保服务</li>
    <li>尚品汇E卡</li>
    <li>尚品汇通信</li>
  </ul>
  <ul class="shopList">
    <li >帮助中心</li>
    <li>
      <img src="./wx_cz.jpg">
    </li>
  </ul>
</div>
  <div class="line"></div>
  <div class="footertext">
    <div class="footertexItem"> 关于我们</div>
    <span>|</span>
    <div class="footertexItem"> 联系我们</div>
    <span>|</span>
    <div class="footertexItem"> 关于我们</div>
    <div class="footertexItem"> 商家入住</div>
    <span>|</span>
    <div class="footertexItem"> 营销中心</div>
    <span>|</span>
    <div class="footertexItem"> 友情链接</div>
    <span>|</span>
    <div class="footertexItem"> 关于我们</div>
    <span>|</span>
    <div class="footertexItem"> 营销中心</div>
    <span>|</span>
    <div class="footertexItem"> 友情链接</div>
    <span>|</span>
    <div class="footertexItem"> 关于我们</div>
  </div>
 <div class="address">
   <div >地址：上海市松江区新凯家园</div>
   <div>沪ICP备190005558号</div>
 </div>
</div>
</template>

<script>
export default {
  name: 'myfooter'
}
</script>

<style  lang="less" scoped>
.footer{
  width: 100%;
  height: 400px;
  background: #cccccc;
  position: absolute;
  left: 0;
  top:2300px;
.shopinfo{
  width: 70%;
  height: 100%;
  margin-top: 30px;
  margin-left: 200px;
  display: flex;
  justify-content: space-around;
  .shopList{
    list-style: none;
  }
  .shopList li:nth-child(1){
    font-size: 16px;
    font-weight: bold;
  }
}
  .line{
    position: absolute;
    top:55%;
    left: 15%;
    width: 70%;
    height: 1px;
    background: gray;
  }
  .footertext{
    position: absolute;
    top:57%;
    left: 15%;
    display: flex;
    width: 70%;
    font-size: 14px;
    justify-content: space-around;
  }
  .address{
    position: absolute;
    top:70%;
    left: 60%;
  }
}
</style>
