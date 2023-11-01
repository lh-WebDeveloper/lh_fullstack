<template>
  <div class="header" v-on:click="isClick">
    <div class="content-warpper">
      <div class="avatar">
        <img
          :src="seller.avatar"
          width="64"
          height="64"
        />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="decription">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="support" v-if="seller.supports"> 
          <!-- 图片 -->
          <v-Support :size="4" :type="seller.supports[0].type"/>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>  
      </div>
       <div class="support-count" v-if="seller.supports">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="iconfont icon-youjiantou"></i>
        </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>
    <!-- 背景 -->
    <div class="background">
          <img
          :src="seller.avatar"
          width="100%"
          height="100%"
        />
    </div>
    <!-- detail -->
    <header-detail v-show="detailVisible" :seller="seller" @hide="hideDetail"/>
  </div>
</template>

<script>
import SupportIco from '@/components/support-ico/Support-ico.vue';
import HeaderDetail from '@/components/header-detail/Header-detail.vue';
export default {
    props:{
      seller:{   //是父组件传过来的左边的属性
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
    return {
      detailVisible:false
    };
  },
  components: {
    "v-Support": SupportIco,
    "header-detail":HeaderDetail
  },
  methods:{
    isClick(){
      this.detailVisible = true
    },
    hideDetail(){
      this.detailVisible = false
    }
  }
};
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';

.header
  position relative
  overflow hidden
  color $color-white
  background $color-background-ss
  .content-warpper
    position relative
    display flex
    padding 24px 12px 18px 24px
    align-items center
    .avatar
      flex 0 0 64px
      margin-right 16px
      img
        border-radius 2px
    .content
      flex 1
      .title
        display flex
        align-items center
        margin-bottom 8px
        .brand
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
          vertical-align middle
        .name
          left 6px
          font-size $fontsize-large
          font-weight bold
          vertical-align middle
          line-height 1
          margin-left 5px
      .decription
        font-size $fontsize-small
        margin-bottom 8px
        line-height 12px
      .support
        display flex
        align-items center
        .text
          line-height 12px
          font-size $fontsize-small-s
          margin-left 4px
    .support-count
      align-items center
      background rgba(7,17,27,.2)
      border-radius 14px
      bottom 14px
      display flex 
      line-height 24px
      padding 0 8px
      position absolute
      right 12px
      text-align center
      -webkit-box-align center
      .count
        font-size 10px
      .iconfont
        font-size 10px
        line-height 24px
        margin-left 2px
  .bulletin-wrapper
    display flex
    height 28px
    line-height 28px
    padding 0 8px
    background $color-background-sss
    align-items center
    .bulletin-title
      font-size 22px
      width 22px
      height 12px
      margin-right 4px
      bg-image('bulletin')
      background-size 22px 12px
      background-repeat no-repeat
    .bulletin-text
      flex 1
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      font-size $fontsize-small-s
    .iconfont
      width 10px
  .background
    width 100%
    height 100%
    position absolute
    top 0 
    left 0
    z-index -1
    filter blur(10px)
    // filter opacity(20%)
    
      
</style>