<template>
  <div class="current-city">
    <div class="title">当前城市</div>
    <div class="city-container">
      <div class="city" @click="changeCity($event)">{{ currentCity }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityCurrent',
  props: {
    currentCity: String,
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
.current-city
  .title
    line-height: 0.6rem
    background-color: #ccc
  .city-container
    display: flex
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
