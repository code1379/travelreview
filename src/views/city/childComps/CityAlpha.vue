<template>
  <div class="alpha">
    <div class="item" v-for="(items, key) in cities" :key="key">
      <div class="name" :ref="key">{{ key }}</div>
      <div
        class="city"
        v-for="city in items"
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
  name: 'CityAlpha',
  props: {
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
};
</script>

<style lang="stylus" scoped>
.alpha
  .item
    .name
      line-height: 0.6rem
      background-color: #ccc
    .city
      margin-right: 0.8rem
      line-height: 0.76rem
      padding-left: 0.2rem
      border-bottom: 1px solid #ccc
</style>
