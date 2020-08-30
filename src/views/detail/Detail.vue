<template>
  <div id="detail">
    <div>
      <detail-nav-bar></detail-nav-bar>
      <!-- 動態傳遞的數據的駝峰間必須以橫槓線分隔 -->
      <detail-swiper :top-images = "topImages"></detail-swiper>
      <h2>詳情頁</h2>
      <h2>{{iid}}</h2>
    </div>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"

import { getDetail } from "network/detail"

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  created() {
    //1.保存傳入的iid
    this.iid = this.$route.params.iid;

    //2.根據iid請求詳情數據
    getDetail(this.iid).then((res) => {
      console.log(res)
      this.topImages = res.result.itemInfo.topImages

    })
  },
};
</script>

<style>
</style>