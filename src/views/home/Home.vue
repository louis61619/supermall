<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">購物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/> 
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精選']" class="tab-control"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
    <ul>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>

      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
      <li>內容</li>
    </ul>
    
  </div>
</template>

<script>

import HomeSwiper from './chidComps/HomeSwiper'
import RecommendView from './chidComps/RecommendView'
import FeatureView from './chidComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata, getHomeGoods} from 'network/home'


export default {
  name: "Home",
  components: {
    
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList

  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      }
    }
  },
  created() {
    //1.請求多個數據
    this.getHomeMultidata()

    //2.請求商品數據
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      // console.log(res.data) //垃圾回收機制所以要放入data中
      // this.result = res.data
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;

      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1 //請求時傳遞參數
      getHomeGoods('pop', page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1 //改變vuedata資料
      })
    }
  }
}
</script>

<style>
  html,body{
    width: 100%
  }
  #home{
    padding-top: 44px;
    
    width: 100%;
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
  .tab-control{
    position: -webkit-sticky;
    position: sticky;
    top: 44px;
    background: #fff;
    z-index: 2;
  }
</style>