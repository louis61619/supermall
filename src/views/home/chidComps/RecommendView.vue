<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.index" class="recommend-item">
      <a :href="item.link" class="recommend-link">
        <img class="recommend-img" :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .recommend{
    width: 100%;
    display: flex;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
    .recommend-item{
      width: 25%; 
      .recommend-link{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .recommend-img{
          width: 80%;
          margin-bottom: 10px;
        }
      }
    }

  }
</style>