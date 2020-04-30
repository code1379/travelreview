<template>
  <div class="top-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variables.styl'
.top-bar
  display: flex
  line-height: 0.86rem
  height: 0.86rem
  background-color: $bgColor
  color: white
  .center
    flex: 1
    font-size: 0.4rem
    text-align: center
  .right
    min-width: 0.8rem
    padding: 0 6px
    text-align: center
  .left
    width: 0.8rem
    display: flex
    justify-content: center
</style>