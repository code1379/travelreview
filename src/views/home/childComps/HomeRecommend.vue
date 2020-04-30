<template>
  <div class="recommend">
    <div class="name">热销推荐</div>
    <div class="item" v-for="item in recommendList" :key="item.id">
      <img class="item-img" :src="item.imgUrl" alt />
      <div class="info">
        <div class="title">{{item.title}}</div>
        <p class="desc">{{item.desc}}</p>
        <span class="see-detail">查看详情</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/mixins.styl'
.recommend
  .name
    line-height: 0.8rem
    background-color: #ccc
    padding-left: 0.2rem
  .item
    padding: 0.1rem
    display: flex
    .item-img
      width: 1.7rem
      height: 1.7rem
    .info
      margin-left: 0.1rem
      .title
        font-size: 0.32rem
        line-height: 0.54rem
      .desc
        color: #cccccc
        ellipsis()
      .see-detail
        display: inline-block
        margin-top: 0.2rem
        background-color: orange
        color: #ffffff
        padding: 3px 5px
</style>