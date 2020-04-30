<template>
  <div class="tickets">
    <div class="cate" v-for="(cate, index) in categoryList" :key="index">
      <div class="item">
        <div class="icon"></div>
        <div class="title">{{ cate.title }}</div>
      </div>
      <DetailTickets :categoryList="cate.children" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTickets',
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.cate
  .item
    display flex
    align-items center
    line-height 40px
    padding 0 10px
    .icon
      // 60 x 450
      background-image url("http://s.qunarzz.com/piao/image/touch/sight/detail.png");
      width 20px
      height 20px
      background-size 20px 150px
      background-position 0 -21px;
      background-repeat no-repeat
      vertical-align middle
    .title
      font-size 16px
  .tickets
    padding 0 10px
</style>
