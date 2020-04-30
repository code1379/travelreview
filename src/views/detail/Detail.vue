<template>
  <div class="detail">
    <Fade>
      <DetailSwiper
        :swiperList="gallaryImgs"
        v-show="isShow"
        @changeIsShow="handleChangeIsShow"
      />
    </Fade>
    <DetailBanner
      :sightName="sightName"
      :bannerImg="bannerImg"
      @changeIsShow="handleChangeIsShow"
    />
    <DetailTickets :categoryList="categoryList" />
  </div>
</template>

<script>
import DetailBanner from './childComps/DetailBanner';
import DetailTickets from './childComps/DetailTickets';
import DetailSwiper from './childComps/DetailSwiper';

import Fade from 'cn/fade/Fade';
import { getDetail } from 'network/detail';
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailTickets,
    DetailSwiper,
    Fade,
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      isShow: true,
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      const res = await getDetail();
      const data = res.data;
      this.sightName = data.sightName;
      this.bannerImg = data.bannerImg;
      this.categoryList = data.categoryList;
      this.gallaryImgs = data.gallaryImgs;
      console.log(data);
    },
    handleChangeIsShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
