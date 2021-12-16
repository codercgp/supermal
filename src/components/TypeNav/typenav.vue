<template>
  <div class="typenav">
    <ul class="typenavList">
      <li class="firstItem"  >
        <a href=""  class="allshop" @mouseenter="isshowshop" >全部商品分类  </a>
          <div class="shopwarp" @mouseleave="isshowleave" @click="gosearch($event)">
            <div class="one" >
              <div v-show="isshowOne" class="leftList" v-for="(c1,index) in shopList" :key="index">
                <span :data-name="c1.categoryName"  :data-category1Id="c1.categoryId" @mouseenter="itemHover(c1)" @mouseleave="notHover()">{{ c1.categoryName }}</span>
              </div>
            </div>
            <div v-show="two.isHover" class="two" @mouseenter="itemHovertwo" @mouseleave="itemHoverclose">
            <div   class="rightitem" v-for="(item,index) in two.arrayItems.categoryChild" :key="index">
              <h3 style="display: inline-block" :data-name="item.categoryName" :data-category2Id="item.categoryId">{{ item.categoryName }}</h3>
              <span   v-for="itemChild in item.categoryChild" :data-name="item.categoryName" :data-category3Id="itemChild.categoryId"> {{itemChild.categoryName}} </span>
            </div>
          </div>
          </div>
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
console.log(throttle)
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
    if(this.$route.path =='/search'){
      this.isshowOne=false
    }
  },
  methods: {
    //
    itemHovertwo () {
      this.two.isHover = true
    },
    // 一级分类的显示与隐藏，鼠标进入
    isshowshop () {
      //如果当前不是home页面  不显示
      this.isshowOne =true
    },
    // 鼠标移出，
    isshowleave () {
      if(this.$route.path =='/search'){
        this.isshowOne = false
      }

    },
    itemHover: throttle(function (item) {
      this.two.isHover = true
      this.two.arrayItems = item
    }, 50),

    // throttle(itemHover,1000)
    notHover: function () {
      this.two.isHover = false
    },
    itemHoverclose () {
      this.two.isHover = false
    },
    // 点击跳转搜索页面
    gosearch(event){
      // 携带query参数，categoryName与当前对应的分类Id
      let location={name:'Search'}
      let query={categoryName:event.target.dataset.name}
      // console.log(event.target.dataset)
     if(event.target.dataset.category1id){
       // 标识当前在一级分类
       query.category1Id=event.target.dataset.category1id
     }else  if(event.target.dataset.category2id){
       //标识当前点击的是二级分类
       query.category2Id=event.target.dataset.category2id
     }else {
       query.category3Id=event.target.dataset.category3id
     }
     if(this.$route.params){
       location.query=query
       location.params=this.$route.params
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
  position: absolute;
  top: 150px;
  left: -150px;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid orangered;

  .typenavList {
    width: 914px;
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

  .allshop:hover {
    .leftList {
      display: block;
    }
  }
  .leftList{
    height: 25px;
    span{
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
.leftList:hover{
  background-color: #bfa;
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
    top: 47px;
    left: 320px;
    width: 1100px;
    height: 450px;
    font-size: 14px;
    .one{
      float: left;
      width: 145px;
    }

    .two{
      float: left;
      position: relative;
      z-index: 999;
      width: 801px;
      height: 100%;
       background: #eeeeee;
    }
    .rightitem{
      width: 100%;
      h3{
        height: 20px;
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
