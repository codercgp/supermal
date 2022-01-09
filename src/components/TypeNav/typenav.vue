<template>
  <div class="typenav">
    <ul class="typenavList">
      <li class="firstItem"  >
        <a   class="allshop" @mouseenter="isshowshop" >全部商品分类 </a>
          <div class="shopwarp"  @mouseleave="isshowleave"  @click="gosearch($event)">
            <div class="one"  ref="one">
              <div v-show="isshowOne" class="leftList" v-for="(c1,index) in shopList" :key="index">
                <span :data-name="c1.categoryName"  :data-category1Id="c1.categoryId" @mouseenter="itemHover(c1)" @mouseleave="notHover()" >{{ c1.categoryName }}</span>
              </div>
            </div>
            <div v-show="two.isHover" class="two" @mouseenter="itemHovertwo" @mouseleave="itemHoverclose" >
              <div   class="rightitem" v-for="(item,index) in two.arrayItems.categoryChild" :key="index">
                <h3 style="display: inline-block" :data-name="item.categoryName" :data-category2Id="item.categoryId">{{ item.categoryName }}</h3>
                <span   v-for="itemChild in item.categoryChild" :data-name="item.categoryName" :data-category3Id="itemChild.categoryId" > {{itemChild.categoryName}} </span>
              </div>
            </div>
          </div>

<!--          <div class="shopwarp"  @mouseleave="isshowleave" @click="gosearch($event)">-->
<!--            <div class="one"  >-->
<!--              <div v-show="isshowOne" class="leftList" v-for="(c1,index) in shopList" :key="index">-->
<!--                <span :data-name="c1.categoryName"  :data-category1Id="c1.categoryId" @mouseenter="itemHover(c1)" @mouseleave="notHover()">{{ c1.categoryName }}</span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div v-show="two.isHover" class="two" @mouseenter="itemHovertwo" @mouseleave="itemHoverclose">-->
<!--            <div   class="rightitem" v-for="(item,index) in two.arrayItems.categoryChild" :key="index">-->
<!--              <h3 style="display: inline-block" :data-name="item.categoryName" :data-category2Id="item.categoryId">{{ item.categoryName }}</h3>-->
<!--              <span   v-for="itemChild in item.categoryChild" :data-name="item.categoryName" :data-category3Id="itemChild.categoryId"> {{itemChild.categoryName}} </span>-->
<!--            </div>-->
<!--          </div>-->
<!--          </div>-->
      </li>
      <li><a href="">服装城</a></li>
      <li><a href="">美妆馆</a></li>
      <li><a href="">尚品汇超市</a></li>
      <li><a href="">全球购</a></li>
      <li><a href="">闪购</a></li>
      <li><a href="">团购</a></li>
      <li><a href="">有趣</a></li>
      <li><a href="">秒杀</a></li>
    </ul>

  </div>
</template>

<script>
const throttle = require('lodash/throttle.js')
export default {
  name: 'typenav',
  data: function () {
    return {
      // 标识一级分类的显示与隐藏
      isshowOne: true,
      // 标识是否显示二级分类和三级分类
      two: {
        isHover: false,
        arrayItems: []
      }
    }
  },
  mounted () {
    this.$store.dispatch('getTypeList')
    if (this.$route.path == '/search') {
      this.isshowOne = false
    }
  },
  methods: {
    // 鼠标移入二级分类，二级分类显示
    itemHovertwo () {
      this.two.isHover = true
    },
    // 一级分类的显示与隐藏，鼠标进入
    isshowshop () {
      // 如果当前不是home页面  不显示
      this.isshowOne = true
      this.$refs.one.style.backgroundColor = 'white'
    },
    // 鼠标移出，
    isshowleave () {
      if (this.$route.path !== '/') {
        this.isshowOne = false
        this.$refs.one.style.backgroundColor = 'transparent'
        this.$refs.one.style.zIndex = '1'
      }
    },
    itemHover: throttle(function (item) {
      this.two.isHover = true
      this.two.arrayItems = item
    }, 50),

    notHover: function () {
      this.two.isHover = false
    },
    // 鼠标离开  二级分类隐藏
    itemHoverclose () {
      this.two.isHover = false
    },
    // 点击跳转搜索页面
    gosearch (event) {
      // 携带query参数，categoryName与当前对应的分类Id
      const location = { name: 'Search' }
      const query = { categoryName: event.target.dataset.name }
      if (event.target.dataset.category1id) {
        // 标识当前在一级分类
        query.category1Id = event.target.dataset.category1id
      } else if (event.target.dataset.category2id) {
        // 标识当前点击的是二级分类
        query.category2Id = event.target.dataset.category2id
      } else {
        query.category3Id = event.target.dataset.category3id
      }
      if (this.$route.params) {
        location.query = query
        location.params = this.$route.params
        this.$router.push(location)
      }
    }
  },
  computed: {
    shopList () {
      return this.$store.state.home.categoryList
    }
  }
}
</script>

<style lang="less" scoped>
.typenav {
  margin-top: 150px;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid orangered;

  .typenavList {
    width: 1200px;
    height: 100%;
    float: left;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      float: left;
      text-decoration: none;

      a {
        text-decoration: none;
        color: black;
      }

      a:hover {
        border-bottom: 2px solid black;
      }
    }

  }
.allshop{
  position: relative;
}
  .leftList{
    height: 25px;
    span{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
.leftList:hover{
  background-color: orangered;
}
  .typenavList .firstItem{
    position: relative;
  }
  .typenavList .firstItem a:nth-child(1) {
    width: 210px;
    height: 45px;
    background: orangered;
    font-size: 25px;
    color: #fff;
  }
  .shopwarp {
    position: absolute;
    top: 42px;
    width: 1100px;
    height: 450px;
    font-size: 14px;
    .one{
      float: left;
      width: 145px;
      height: 100%;
      position: absolute;
      top:0;
      left: 0;
      z-index: 999;
      color: black;
      background-color: white;
      text-indent: 5px;
      line-height: 25px;
    }

    .two{
       position: absolute;
      left: 145px;
      z-index: 999;
      width: 870px;
      height: 100%;
      color: black;
      background-color: white;
    }
    .rightitem{
      width: 100%;
      h3{
        height: 20px;
        //text-indent: 20px;
        padding-left: 20px;
      }
      span{
        height: 20px;
      }
      span:before{
        content: '|';
        margin: 5px;
      }

    }

  }
}
</style>
