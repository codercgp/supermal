<template>
  <header class="header">
    <div class="leftWarp">
      <span>尚品汇欢迎您！</span>
<!--      当前是未登录状态-->
      <p v-if="!userName">
        <a @click="goLogin">请登录</a>
        <span class="icon">|</span>
        <a @click="goregister">免费注册</a>
      </p>
<!--当前是登陆状态-->
      <p v-else>
       <a>{{userName}}</a>
        <span class="icon">|</span>
        <a class="register" @click="goOut">退出登录</a>
      </p>
    </div>
    <div class="rightWarp">
      <router-link to="/center">我的订单</router-link>
      <span>|</span>
      <router-link to="/cart">我的购物车</router-link>
      <span>|</span>
      <a>我的商品会</a>
      <span>|</span>
      <a>商品会会员</a>
      <span>|</span>
      <a>企业采购</a>
      <span>|</span>
      <a>关注商品会</a>
      <span>|</span>
      <a>合作招商</a>
      <span>|</span>
      <a>商家后台</a>
    </div>
    <div class="logo">
      <img src="./logo.png">
    </div>
    <div class="search">
      <input type="text" v-model="keyword"/>
      <div class="searchbtn" @click="gosearch">搜索</div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'myheader',
  data () {
    return {
      // 双向绑定input
      keyword: ''
    }
  },
  computed: {
    userName () {
      return this.$store.state.user.userInfo.name
    }
  },
  mounted () {
    this.$bus.$on('removeKeyword', () => {
      this.keyword = ''
    })
  },
  methods: {
    gosearch () {
      if (this.$route.query) {
        const location = { name: 'Search', params: { keyword: this.keyword } }
        location.query = this.$route.query
        this.$router.push(location)
      }
    },
    goregister () {
      this.$router.replace({ name: 'Register' })
    },
    goLogin () {
      this.$router.replace({ name: 'Login' })
    },
    async  goOut () {
      // 退出登录
      try {
        await this.$store.dispatch('userOut')
        this.$router.push({ name: 'Home' })
        // 【清除一些数据：token】
        // 2:清除项目当中的数据【userInfo、token】
        localStorage.removeItem('TOKEN')
        this.$store.state.user.userInfo = {}
        this.$store.state.user.token = ''
      } catch (e) {
        this.$message.error('网络错误')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  position: relative;
  height: 30px;
  width: 100%;
  background: #eee;

  .leftWarp {
    height: 60px;
    float: left;
    margin-left: 150px;
    text-align: center;
    line-height: 1.8rem;
    font-size: 14px;
  display: flex;
    span:nth-child(1) {
      margin-right: 10px;
    }

    .icon {
      margin-left: 5px;
      margin-right: 5px;
      color: #ccc;
    }
  }

  .rightWarp {
    text-align: center;
    line-height: 1.8rem;
    float: right;
    margin-right: 150px;
    font-size: 14px;

    span {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  .logo {
    position: absolute;
    top: 60px;
    left: 150px;
  }

  .search {
    position: absolute;
    top: 60px;
    right: 500px;
    right: 300px;

    input {
      border: 1px solid orangered;
      width: 300px;
      height: 25px;
      outline: orangered;
    }

    .searchbtn {
      position: absolute;
      top: 0px;
      left: 300px;
      width: 50px;
      height: 27px;
      background: orangered;
      color: #fff;
      text-align: center;
      font-size: 14px;
      line-height: 1.5rem;
    }
  }
}
</style>
