<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(item,index) in cartInfoList" :key="index">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="item.isChecked == 1" @change="updateChacked(item,$event)">
          </li>
          <li class="cart-list-con2">
            <img :src="item.imgUrl">
            <div class="item-msg">{{item.skuName}}</div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">{{$route.query.color}}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{item.cartPrice}}</span>
          </li>
          <li class="cart-list-con5">
            <a class="mins" @click="headler('sub',-1,item)">-</a>
            <input autocomplete="off" type="text"  minnum="1" class="itxt" :value="item.skuNum" @change="headler('test',$event.target.value*1,item)">
            <a  class="plus" @click="headler('add',1,item)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{item.cartPrice*item.skuNum}}</span>
          </li>
          <li class="cart-list-con7">
            <a  class="sindelet" @click="shopDelete(item.skuId)">删除</a>
            <br>
            <a >移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="isAllchecked" @change="checkChange($event)">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>0</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{addPrice}}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const throttle = require('lodash/throttle.js')
export default {
  name: 'Cart',
  data () {
    return {
      skuNum: 1
    }
  },
  mounted () {
    this.$store.dispatch('getCart')
  },
  computed: {
    ...mapGetters(['cartInfo']),
    cartInfoList () {
      return this.cartInfo.cartInfoList || []
    },
    addPrice () {
      let sum = 0
      this.cartInfoList.forEach((item) => {
        if (item.isChecked == 1) {
          sum += item.skuNum * item.skuPrice
        }
      })
      return sum
    },
    // eslint-disable-next-line vue/return-in-computed-property
    isAllchecked () {
      return this.cartInfoList.every(item => item.isChecked == 1)
      // for (var i = 0; i < this.cartInfoList.length; i++) {
      //   console.log(i)
      //   if (this.cartInfoList[i].isChecked == 1) {
      //     return true
      //   } else {
      //     return false
      //   }
      // }
    }
  },
  watch: {
    isAllchecked (newvalue, oldvaule) {
      console.log(`监视的${oldvaule}`)
      console.log(`监视的${newvalue}`)
    }
  },
  methods: {
    getData () {
      this.$store.dispatch('getCart')
    },
    // 删除某个商品的回调
    async shopDelete (skuid) {
      try {
        await this.$store.dispatch('shopDelete', skuid)
        console.log('成功的promise')
        this.getData()
      } catch {
        console.log('组件中失败的promise')
        this.$message.error('网络错误')
      }
    },
    headler: throttle(async function (type, disNum, item) {
      if (type === 'add') {
        disNum = 1
      } else if (type === 'sub') {
        if (item.skuNum < 1) {
          disNum = 1
        } else {
          disNum = -1
        }
      } else if (type === 'test') {
        if (/^[0-9]{1-4}/.test(disNum)) {
          console.log('okkkk')
          disNum = parseInt(disNum) - item.skuNum
        }
      }
      try {
        // 发起请求添加
        this.$store.dispatch('addOrupdateShop', {
          skuId: item.skuId,
          skuNum: disNum
        })
        // 再次发送请求
        this.getData()
        // this.cartInfoList.forEach((i) => {
        //   item.skuNum = i.skuNum
        // })
      } catch (error) {
        this.$message.error(error)
      }
    }, 1000),
    // 是否选中的回调
    updateChacked (item, event) {
      // skuID, isChecked
      const isChecked = event.target.checked ? '1' : '0'
      try {
        this.$store.dispatch('IsChecked', {
          skuId: item.skuId,
          isChecked
        })
        // 再次发送请求
        this.getData()
      } catch (e) {
        this.$message.error('网络错误')
      }
    },
    // 是否全选的回调
    checkChange (event) {
      this.cartInfoList.every(item => item.isChecked == 1)
      // let isChecked = ''
      // this.cartInfoList.forEach((item) => {
      //   isChecked = event.target.checked ? '1' : '0'
      //   if (isChecked == '1') {
      //     isChecked = '0'
      //   } else {
      //     isChecked == '1'
      //   }
      // })
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;
 margin-top: 150px;
  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      &>div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;

      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        &>li {
          float: left;
        }

        .cart-list-con1 {
          width: 4.1667%;
        }

        .cart-list-con2 {
          width: 25%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12.5%;

        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
