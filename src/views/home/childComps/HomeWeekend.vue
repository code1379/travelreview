<template>
  <div class="weekend">
    <div class="name">周末去哪二</div>
    <div class="item" v-for="item in weekendList" :key="item.id">
      <img class="item-img" :src="item.imgUrl" alt />
      <div class="title">{{item.title}}</div>
      <p class="desc">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.weekend
  .name
    line-height: 0.8rem
    background-color: #ccc
    padding-left: 0.2rem
  .item
    padding-bottom: 0.2rem
  .item-img
    width: 100%
  .title
    font-size: 0.32rem
    line-height: 0.54rem
  .desc
    color: #cccccc
</style>