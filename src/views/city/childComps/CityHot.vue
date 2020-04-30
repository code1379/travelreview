<template>
  <div class="hot-city">
    <div class="title">热门城市</div>
    <div class="city-container">
      <div
        class="city"
        v-for="city in hotCities"
        :key="city.id"
        @click="changeCity($event)"
      >
        {{ city.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHot',
  props: {
    hotCities: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    changeCity(event) {
      this.$emit('changeCity', event.target.innerText);
    },
  },
};
</script>

<style lang="stylus" scoped>
.hot-city
  .title
    line-height: 0.6rem
    background-color: #ccc
  .city-container
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    padding: 0 0.8rem 0.2rem 0.2rem
    .city
      margin-top: 0.2rem
      width: 30%
      border: 1px solid #ccc
      text-align: center
      box-sizing: border-box
      line-height: 0.52rem
      border-radius: 8px
</style>
