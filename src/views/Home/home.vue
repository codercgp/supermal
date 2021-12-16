<template>
  <div class="home">
   <Header/>
    <Footer/>
    <typenav/>
    <ListContainer/>
    <referrals/>
    <Like/>
    <Floor v-for="(item,index) in shoplist" :key="index"
           :carouselList="item.carouselList" :keywords="item.keywords" :navList="item.navList"
           :recommendList="item.recommendList"
    />
  </div>
</template>

<script>
import ListContainer from './ListContainer/listcontainer'
import referrals from '@/components/Referrals/referrals.vue'
import Like from '@/components/Like/like.vue'
import Floor from '@/views/Home/Floor/floor.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    ListContainer,
    referrals,
    Like,
    Floor
  },
  mounted () {
    this.$store.dispatch('getshopList')
  },
  computed: {
    ...mapState({
      shoplist: state => state.home.shoplist
    })
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
}

</style>
