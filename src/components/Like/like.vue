<template>
<div class="like">
<div class="likeHeader">
 <h3>猜你喜欢</h3>
  <span>换一批<i class="el-icon-refresh" style="color: red;font-size: 25px" ></i></span>
</div>
  <div class="likecontent">
    <ul class="likeList">
      <li class="likeItem">
        <img src="./image/like_02.png"/>
        <span class="shoptext">麦饭石不粘锅炒锅家用韩国麦石锅炒菜锅麦饭石锅平底锅无涂层不沾
        <h3 class="price">￥116.00</h3></span>

      </li>
      <li class="likeItem">
        <img src="./image/like_01.png"/>
        <span class="shoptext">麦饭石不粘锅炒锅家用韩国麦石锅炒菜锅麦饭石锅平底锅无涂层不沾
        <h3 class="price">￥116.00</h3></span>

      </li>
      <li class="likeItem">
        <img src="./image/like_03.png"/>
        <span class="shoptext">麦饭石不粘锅炒锅家用韩国麦石锅炒菜锅麦饭石锅平底锅无涂层不沾
        <h3 class="price">￥116.00</h3></span>

      </li>
      <li class="likeItem">
        <img src="./image/like_01.png"/>
        <span class="shoptext">麦饭石不粘锅炒锅家用韩国麦石锅炒菜锅麦饭石锅平底锅无涂层不沾
        <h3 class="price">￥116.00</h3></span>

      </li>
      <li class="likeItem">
        <img src="./image/like_02.png"/>
        <span class="shoptext">麦饭石不粘锅炒锅家用韩国麦石锅炒菜锅麦饭石锅平底锅无涂层不沾
        <h3 class="price">￥116.00</h3></span>

      </li>
      <li class="likeItem">
        <img src="./image/like_03.png"/>
        <span class="shoptext">麦饭石不粘锅炒锅家用韩国麦石锅炒菜锅麦饭石锅平底锅无涂层不沾
        <h3 class="price">￥116.00</h3></span>

      </li>

    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'like'
}
</script>

<style lang="less" scoped>
.like{
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 50px;
  .likeHeader{
    display: flex;
    justify-content: space-between;
  }
  .likecontent{
    .likeList{
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #cccccc;
      .likeItem{
        margin-right: 20px;
        .shoptext{
          display: inline-block;
          text-indent: 10px;
          height: 60px;
          font-size: 12px;
          border-right: 1px solid #cccccc;
          padding-right:10px ;
        }
        .price{
          font-size: 24px;
          font-weight: bold;
          color: red;
        }
      }
    }
  }
}
</style>
