<template>
  <TopBar class="city-search">
    <div slot="center">
      <input
        type="text"
        class="search-input"
        :value="cityName"
        @input="changeCityNameAndEmit($event)"
        placeholder="输入城市名"
      />
    </div>
  </TopBar>
</template>

<script>
import TopBar from 'cn/topBar/TopBar';
export default {
  name: 'CitySearch',
  components: {
    TopBar,
  },
  props: {
    cityName: {
      type: String,
      default: '',
    },
  },
  // data() {
  //   return {
  //     cityName: '',
  //   };
  // },
  methods: {
    changeCityNameAndEmit(event) {
      // this.cityName = event.target.value;
      // 我们在这里延迟它的发送
      this.$emit('cityNameChange', event.target.value);
    },
  },
};
</script>

<style lang="stylus" scoped>
.city-search
  margin-top: -1px
.search-input
  width: 100%
  font-size: 0.3rem
  line-height: 0.6rem
  text-align: center
  // 这种语法不管用
  // &::placeholder
  //   content: '输入城市名'
</style>
