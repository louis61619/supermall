<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">購物街</div>
    </nav-bar>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精選']" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./chidComps/HomeSwiper";
import RecommendView from "./chidComps/RecommendView";
import FeatureView from "./chidComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop"

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    //1.請求多個數據
    this.getHomeMultidata();

    //2.請求商品數據
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件監聽相關的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      // this.$refs.srcoll.scroll.scrollTo(0 , 0)
      this.$refs.scroll.scrollTo(0, 0, 500)
      // console.log(this.$refs.scroll.scroll.scrollTo)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000
    },
    /**
     * 網路請求相關的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data) //垃圾回收機制所以要放入data中
        // this.result = res.data
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1; //請求時傳遞參數
      getHomeGoods("pop", page).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1; //改變vuedata資料
      });
    }
  }
};
</script>

<style scoped>
html,
body {
  width: 100%;
  
}
#home {
  padding-top: 44px;
  height: 100vh;
  width: 100%;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9;
}
.tab-control {
  position: -webkit-sticky;
  position: sticky;
  top: 44px;
  background: #fff;
  z-index: 2;
}
.content{
  height: calc(100% - 49px);
  overflow: hidden;
}
</style>