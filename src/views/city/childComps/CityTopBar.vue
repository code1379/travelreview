<template>
  <TopBar class="home-top-bar">
    <div slot="left" @click="handleClick">
      <i class="iconfont back-icon">&#xe624;</i>
    </div>
    <div slot="center">城市选择</div>
  </TopBar>
</template>

<script>
import TopBar from "cn/topBar/TopBar";
export default {
  name: "CityTopBar",
  components: {
    TopBar
  },
  methods: {
    handleClick() {
      this.$emit("backHome");
    }
  }
};
</script>

<style lang="stylus" scoped></style>
