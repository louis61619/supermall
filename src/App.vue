<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar";
import Axios from "axios";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
  // created() {
  //   document.addEventListener(
  //     "touchmove",
  //     function (event) {
  //       event.preventDefault();
  //     },
  //     {
  //       passive: false,
  //     }
  //   );
  // },
};
</script>

<style>
@import "assets/css/base.css";
</style>
