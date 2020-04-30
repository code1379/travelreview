<template>
  <div class="detail-swiper-container" @click="changeIsShow">
    <div class="wrapper">
      <Swiper :options="swiperOptions" class="detail-swiper">
        <SwiperSlide v-for="(item, index) in swiperList" :key="index">
          <img class="slide-img" :src="item" alt />
        </SwiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    swiperList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      },
    };
  },
  methods: {
    changeIsShow() {
      this.$emit('changeIsShow');
    },
  },
};
</script>

<style lang="stylus" scoped>
.detail-swiper-container
  position absolute
  display flex
  align-items center
  top 0
  right 0
  bottom 0
  left 0
  background-color black
  z-index 1
  .wrapper
    height  0
    padding-bottom 100%
    width 100%
    .detail-swiper
      height  0
      padding-bottom 100%
      width 100%
      background purple
      overflow unset
      .slide-img
        width 100%
    .swiper-pagination
      // 原来的类型上有  position absolute
      // position absolute
      // width 100vw
      bottom -0.5rem
      color #ffffff
</style>
