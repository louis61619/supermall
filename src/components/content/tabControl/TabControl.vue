<template>
  <div class="tab-control">
    <div v-for="item in titles" :key="item.index" class="tab-control-item">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style lang="scss">
  .tab-control{
    width: 100%;
    display: flex;
    .tab-control-item{
      flex: 1;
      text-align: center;
      height: 40px;
      font-size: 15px;
    }
  }
  .active {
    color: var(--color-high-text)
  }
</style>