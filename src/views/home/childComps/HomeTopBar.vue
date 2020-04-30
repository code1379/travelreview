<template>
  <TopBar class="home-top-bar">
    <!-- <div slot="left">
      <i class="iconfont back-icon">&#xe624;</i>
    </div>-->
    <div slot="center">首页</div>
    <div slot="right" @click="handleClick">
      <span>{{ currentCity }}</span>
      <i class="iconfont arrow-select">&#xe64a;</i>
    </div>
  </TopBar>
</template>

<script>
import { mapGetters } from 'vuex';
import TopBar from 'cn/topBar/TopBar';
export default {
  name: 'HomeTopBar',
  components: {
    TopBar,
  },
  methods: {
    handleClick() {
      this.$emit('citySelect');
    },
  },
  mounted() {
    console.log(this.currentCity);
  },
  computed: {
    ...mapGetters(['currentCity']),
  },
};
</script>

<style lang="stylus" scoped>
.arrow-select
  font-size: 0.24rem
  margin-left: 2px
</style>
