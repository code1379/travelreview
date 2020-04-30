<template>
  <div class="home-cates">
    <Swiper>
      <SwiperSlide v-for="(page, index) in pages" :key="index">
        <div class="item-container">
          <div class="item" v-for="item in page" :key="item.id">
            <img class="icon-img" :src="item.imgUrl" alt />
            <div class="title">{{item.desc}}</div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "HomeCates",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    iconList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      pageCount: 8
    };
  },
  computed: {
    pages() {
      const list = [];
      for (let i = 0; i < this.iconList.length; i += this.pageCount) {
        list.push(this.iconList.slice(i, i + this.pageCount));
      }
      return list;
    }
  }
};
</script>

<style lang="stylus" scoped>
.home-cates
  margin: 0.2rem 0
  .item-container
    display: flex
    flex-wrap: wrap
    .item
      // flex-shrink: 0
      text-align: center
      width: 25%
      overflow: hidden
      padding: 0.1rem 0
      .icon-img
        width: 1.24rem
        margin-bottom: 0.1rem
</style>