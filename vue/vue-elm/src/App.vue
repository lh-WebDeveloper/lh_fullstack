<template>
  <div class="app">
    <!-- 头部 -->
    <v-header :seller="seller" />
    <!-- 导航栏 -->
    <div class="tap">
      <div class="tap-wrap">
        <router-link to="/goods/">商品</router-link>
      </div>
      <div class="tap-wrap">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tap-wrap">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <div class="page">
      <router-view :seller = "seller"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import { getSeller } from "@/api";
export default {
  data() {
    return {
      seller: {},
    };
  },
  components: {
    "v-header": Header,
  },
  created() {
    getSeller().then((seller) => {
      console.log(seller);
      this.seller = seller;
    });
  },
};
</script>

<style lang="stylus">
@import './common/stylus/variable.styl';
.tap
  display flex
  height 36px
  line-height 36px
  justify-content center
  &-wrap
    flex 1
    text-align center
    font-size 16px
    a
      display inline-block
      width 100%
      height 100%
      text-decoration none
      color $color-font
    .router-link-exact-active 
      color $color-red
      border-bottom 2px solid $color-red
</style>
