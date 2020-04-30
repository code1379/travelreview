<template>
  <div class="detail-banner" :style="bgStyle" @click="changeIsShow">
    <!-- <img class="banner-img" :src="bannerImg" alt="" /> -->
    <div class="title">{{ sightName }}</div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
  },
  computed: {
    bgStyle() {
      return {
        backgroundImage: `url(${this.bannerImg})`,
      };
    },
  },
  methods:{
    changeIsShow(){
      this.$emit("changeIsShow")
    }
  }
};
</script>

<style lang="stylus" scoped>
.detail-banner
  height 0
  padding-bottom 55%
  background-color red
  background-size contain
  position relative
  .title
    position absolute
    bottom 0
    left 0
    right 0
    line-height 32px
    color #ffffff
    font-size 16px
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(51,51,51,1) 100%, rgba(0,0,0,0) 100%);
</style>
