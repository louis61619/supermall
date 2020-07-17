<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/> 
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精選']"></tab-control>
  </div>
</template>

<script>

import HomeSwiper from './chidComps/HomeSwiper'
import RecommendView from './chidComps/RecommendView'
import FeatureView from './chidComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata} from 'network/home'


export default {
  name: "Home",
  components: {
    
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,

  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: []
    }
  },
  created() {
    //1.請求多個數據
    getHomeMultidata().then(res => {
      // console.log(res.data) //垃圾回收機制所以要放入data中
      // this.result = res.data
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;

    })
  }
}
</script>

<style>
  #home{
    padding-top: 44px;
    padding-bottom: 100px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;

  }
</style>