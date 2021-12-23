<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
<!--        上面部分-->
        <li  :class="pageNo==1?'prev disabled' :'prev'">
          <a :class="pageNo==1?'prev disabled' :''" @click="$emit('getPageNo' ,pageNo-1)">«上一页</a>
        </li>
        <li  :class="pageNo==1?'active':''">
          <a href="#" v-show="startNumAndEndNum.startNum>1" @click="$emit('getPageNo',1)">1</a>
        </li>
        <li class="dotted" v-show="startNumAndEndNum.startNum>2"><span>...</span></li>
<!--        中间部分-->
        <li>
          <a href="#" v-for="(page,index) in startNumAndEndNum.endNum*1" :key="index" v-if="page >= startNumAndEndNum.startNum" @click="$emit('getPageNo',page)"  :class="pageNo==page?'active':''">{{page}}</a>
        </li>
<!--        下面部分-->
        <li class="dotted" v-if="startNumAndEndNum.endNum<totalPage-1"><span>...</span></li>
        <li >
          <a href="#" v-show="startNumAndEndNum.endNum<totalPage" @click="$emit('getPageNo',totalPage)"  :class="pageNo==totalPage?'active':''">{{totalPage}}</a>
        </li>
        <li class="next" :class="pageNo==totalPage?'disabled':''">
          <a href="#" @click="$emit('getPageNo',pageNo+1)">下一页»</a>
        </li>
      </ul>
      <br/>
      <span>开始页：{{startNumAndEndNum.startNum}}---结束页{{startNumAndEndNum.endNum}}===当前页码{{pageNo}} 共{{totalPage}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: ['pageNo', 'pageSize', 'total', 'continue'],
  computed: {
    totalPage () {
      const { total, pageSize } = this
      return Math.ceil(total / pageSize)
    },
    startNumAndEndNum () {
      let startNum = 0
      let endNum = 0
      // 非正常情况下  连续的页码数比总页数要大
      if (this.continue > this.totalPage) {
        startNum = 1
        endNum = this.totalPage
      } else {
        startNum = this.pageNo - parseInt(this.continue / 2)
        endNum = this.pageNo * 1 + parseInt(this.continue / 2)
      }
      // startNum不能出现负数   当总页数为1的时候  连续的5个页码数  -10123
      // 当总页数为2的时候 连续的5个数   01234  当总页数为3的时候 连续出现的5个数 12345
      if (startNum < 1) {
        startNum = 1
        endNum = this.continue
      }
      // endNum不能出现大于this.totalPage 的数
      if (endNum > this.totalPage) {
        console.log(this.totalPage)
        console.log(this.continue)
        startNum = this.totalPage - this.continue + 1
        endNum = this.totalPage
      }

      return { startNum, endNum }
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;

.sui-pagination {
  margin: 18px 0;

ul {
  margin-left: 0;
  margin-bottom: 0;
  vertical-align: middle;
  width: 600px;
  float: left;

li {
  line-height: 18px;
  display: inline-block;

a {
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e0e9ee;
  margin-left: -1px;
  font-size: 14px;
  padding: 9px 18px;
  color: #333;
}
.active{
  background-color: #bbffaa;
}
&.active {
a {
  background-color: #fff;
  color: #e1251b;
  border-color: #fff;
  cursor: default;
}
}

&.prev {
a {
  background-color: #fafafa;
}
}

&.disabled {
a {
  color: #999;
  cursor: default;
  pointer-events: none;
}
}

&.dotted {
span {
  margin-left: -1px;
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  font-size: 14px;
  border: 0;
  padding: 9px 18px;
  color: #333;
}
}

&.next {
a {
  background-color: #fafafa;
}
}
}
}

div {
  color: #333;
  font-size: 14px;
  float: right;
  width: 241px;
}
}
}
</style>
