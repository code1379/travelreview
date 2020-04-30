<template>
  <div class="home">
    <HomeTopBar @citySelect="handleCitySelect" />
    <HomeSwiper :swiperList="swiperList" />
    <HomeCates :iconList="iconList" />
    <HomeRecommend :recommendList="recommendList" />
    <HomeWeekend :weekendList="weekendList" />
  </div>
</template>

<script>
// @ is an alias to /src

import HomeTopBar from './childComps/HomeTopBar';
import HomeSwiper from './childComps/HomeSwiper';
import HomeCates from './childComps/HomeCates';
import HomeRecommend from './childComps/HomeRecommend';
import HomeWeekend from './childComps/HomeWeekend';
import { getHomeResource } from 'network/index.js';
export default {
  name: 'Home',
  components: {
    HomeTopBar,
    HomeSwiper,
    HomeCates,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  mounted() {
    this.getHomeResource();
    // console.log(getHomeResource);
  },
  methods: {
    async getHomeResource() {
      const res = await getHomeResource();
      if (res) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
        console.log(data);
      } else {
        throw new Error('获取主页资源失败');
      }
    },
    handleCitySelect() {
      this.$router.push({
        name: 'City',
      });
    },
  },
};
</script>

<style lang="stylus" scoped></style>
