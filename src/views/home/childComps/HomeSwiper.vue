<template>
  <div class="home-swiper">
    <Swiper :options="swiperOptions">
      <SwiperSlide v-for="item in swiperList" :key="item.id">
        <img class="slide-img" :src="item.imgUrl" alt />
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    swiperList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true,
        loop: true
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.home-swiper
  height: 0
  padding-bottom: 31.25%
  background-color: yellow
  overflow: hidden
  .slide-img
    width: 100%
</style>