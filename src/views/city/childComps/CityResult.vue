<template>
  <Scroll class="city-result-scroll">
    <div class="city-result">
      <ul v-if="resultList.length">
        <li
          class="item"
          v-for="item in resultList"
          :key="item.id"
          @click="changeCity($event)"
        >
          {{ item.name }}
        </li>
      </ul>
      <div v-else class="not-found">
        没有找到
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from 'cn/scroll/Scroll';
export default {
  name: 'CityResult',
  components: {
    Scroll,
  },
  props: {
    cityName: {
      type: String,
      default: '',
    },
    cities: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    changeCity(event) {
      // console.log(event.target.innerText);
      this.$emit('changeCity', event.target.innerText);
    },
  },
  computed: {
    resultList() {
      const list = [];
      console.log('cityname:', this.cityName);
      if (Object.keys(this.cities) !== 0) {
        for (let key in this.cities) {
          // console.log(this.cities[key]);
          // in 是索引,  of 是值
          for (let cityObj of this.cities[key]) {
            // console.log(cityObj);
            if (
              cityObj.spell.indexOf(this.cityName) !== -1 ||
              cityObj.name.indexOf(this.cityName) !== -1
            ) {
              list.push(cityObj);
            }
          }
        }
      }
      return list;
    },
  },
};
</script>

<style lang="stylus" scoped>
.city-result-scroll
  position absolute
  top 86px
  right 0
  bottom 0
  left 0
  background-color #fff
  .item, .not-found
    line-height: 0.76rem;
    padding-left: 0.2rem;
    border-bottom: 1px solid #ccc;
</style>
