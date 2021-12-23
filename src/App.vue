<template>
  <div class="warp">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/header'
import Footer from '@/components/Footer/footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped lang="less">
.warp{
  width: 100%;
  height: 100%;
}
</style>
