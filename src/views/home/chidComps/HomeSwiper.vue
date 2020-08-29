<template>
  <swiper ref="swiper">
    <swiper-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  created() {
    // console.log(this)
  },
  watch: { //數據渲染完畢時操作DOM
    banners: function () {
      this.$nextTick(() => {
        this.$refs.swiper.handleDom()
        this.$refs.swiper.startTimer()
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>