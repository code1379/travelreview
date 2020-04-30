<template>
  <div
    class="touch-alpha"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <ul>
      <li
        class="item"
        @click="handleClick(item)"
        v-for="item in alphabet"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityTouchAlpha',
  props: {
    alphabet: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isTouch: false,
    };
  },
  methods: {
    handleTouchStart() {
      this.isTouch = true;
    },
    handleTouchMove(e) {
      if (this.isTouch) {
        // console.log(e.touches[0].clientY);
        // 150 -170 是padding
        // 170-190 是 A
        // 150 < x < alphabet.length * 20
        // console.log(e.touches[0].clientY);
        if (
          // 我这里必须精准计算。。。。
          e.touches[0].clientY >= 170 &&
          e.touches[0].clientY <= 150 + this.alphabet.length * 20
        ) {
          // console.log('if');
          const index = Math.floor((e.touches[0].clientY - 170) / 20);
          this.$emit('scrollToElement', this.alphabet[index]);
        }
      }
    },
    handleTouchEnd() {
      this.isTouch = false;
    },
    handleClick(alpha) {
      console.log('click');
      this.$emit('scrollToElement', alpha);
    },
  },
};
</script>

<style lang="stylus" scoped>
.touch-alpha
  position fixed
  z-index 999
  padding 20px 0
  top  150px
  right 10px
  color #00BCD4
  .item
    line-height 20px
    padding 0 5px
</style>
