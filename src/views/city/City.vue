<template>
  <div class="city">
    <CityTopBar @backHome="handleBackHome" />
    <CitySearch :cityName="cityName" @cityNameChange="handleCityNameChange" />
    <CityTouchAlpha
      :alphabet="alphabet"
      @scrollToElement="handleScrollToElement"
    />
    <Scroll class="city-scroll" ref="scroll">
      <CityCurrent :currentCity="currentCity" @changeCity="handleChangeCity" />
      <CityHot :hotCities="hotCities" @changeCity="handleChangeCity" />
      <CityAlpha
        :cities="cities"
        @changeCity="handleChangeCity"
        ref="cityalpha"
      />
    </Scroll>
    <!-- 如果cityname 有值的话就显示 -->
    <CityResult
      :cityName="cityName"
      :cities="cities"
      v-show="cityName"
      @changeCity="handleChangeCity"
    />
  </div>
</template>

<script>
import CityTopBar from './childComps/CityTopBar';
import CitySearch from './childComps/CitySearch';
import Scroll from 'cn/scroll/Scroll';
import CityCurrent from './childComps/CityCurrent';
import CityHot from './childComps/CityHot';
import CityAlpha from './childComps/CityAlpha';
import CityResult from './childComps/CityResult';
import CityTouchAlpha from './childComps/CityTouchAlpha';

//
import { getCityResource } from 'network/city';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'City',
  components: {
    CityTopBar,
    CitySearch,
    CityCurrent,
    CityHot,
    Scroll,
    CityAlpha,
    CityResult,
    CityTouchAlpha,
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      cityName: '',
    };
  },
  mounted() {
    this.getCityResource();
    this.cityalpha = this.$refs.cityalpha;
    this.scroll = this.$refs.scroll;
    // console.log(this.cityalpha.$refs.A);
  },
  methods: {
    ...mapActions({
      change: 'asyncChangeCity',
    }),
    handleScrollToElement(alpha) {
      console.log(alpha);
      this.scroll.scrollToElement(this.cityalpha.$refs[alpha][0]);
    },
    handleChangeCity(city) {
      // 执行change
      // this.cityName = '';
      this.change(city);
      this.$router.push({
        path: '/home',
      });
    },
    handleCityNameChange(cityname) {
      this.cityName = cityname.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    },
    handleBackHome() {
      this.$router.go(-1);
    },
    async getCityResource() {
      const res = await getCityResource();
      if (res) {
        const data = res.data;
        // console.log(data);
        this.hotCities = data.hotCities;
        this.cities = data.cities;
        console.log(this.hotCities);
        console.log(this.cities);
      }
    },
  },
  computed: {
    ...mapGetters(['currentCity']),
    alphabet() {
      return Object.keys(this.cities);
    },
  },
};
</script>

<style lang="stylus" scoped>
.city-scroll
  position: absolute
  top: 1.72rem
  right: 0
  bottom: 0
  left: 0
  overflow: hidden
</style>
