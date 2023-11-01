<template>
  <div>
    <div class="shop-cart">
    <div class="content" @click="toGoList">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight' : num > 0}">
            <i class="iconfont icon-24gl-cartFull3" :class="{'highlight' : price > 0}"></i>
          </div>
          <div class="num" v-show="num > 0"> {{num}}</div>
        </div>
        <div class="price" :class="{'highlight' : price > 0}">￥{{price}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" v-if=" !price ">￥{{minPrice}}起送</div>
        <div class="pay not-enough" v-if="minPrice-price > 0">还差￥{{minPrice-price}}起送</div>
        <div class="pay enough" v-if="minPrice-price <= 0">立即结算</div>
      </div>
    </div>
    <!-- list -->
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty" @click="clear">清空</span>
        </div>
        <div class="list-content" ref="listWrapper">
          <ul >
            <li class="food" v-for="(food,index) in selectFoods" :key="index">
              <span class="name">{{food.name}}</span>
              <div class="price">
                <span>￥{{food.price*food.count}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cart-control :food="food"></cart-control>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition> 
    </div>
    <!-- masker -->
    <div class="masker" v-show="listShow" @click="close"></div>
  </div>
</template>

<script>
import Cartcontrol from '../cart-control/Cart-control.vue'
import BScroll from 'better-scroll'
export default {
props:{
  selectFoods:{
    type:Array,
    default(){
      return []
    }
  },
  deliveryPrice:{
    type:Number,
    default(){
      return 0
    }
  },
  minPrice:{
    type:Number,
    default(){
      return 0
    }
  }
},
data(){
  return{
    fold:false,
    listShow:false
  }
},
components: {
  'cart-control': Cartcontrol,
},
computed:{
  num(){
    let num = 0
    for(let item of this.selectFoods){
      num += item.count
    }
    return num
  },
  price(){
    let price = 0
    for(let item of this.selectFoods){
      price += item.count*item.price
    }
    return price
  },
  // listShow(){
  //   if(!this.num){
  //     this.flod = true
  //     return false
  //   }else{
  //     let show = !this.fold
  //     // if(show){
      
  //     // }
  //     return show
  //   }
  // }
},
mounted(){
 
},
methods:{
  _initScroll() {
    this.listScroll = new BScroll(this.$refs.listWrapper, {
      click: true,
      probeType:3
    })
  },
  clear(){
    for(let food of this.selectFoods){
      food.count = 0
    }
    this.listShow = false
  },
  toGoList(){
    if(this.num>0){
      this.listShow = !this.listShow
    }
    if(this.selectFoods.length > 5){
      this.$nextTick(() => {
        this._initScroll()
      })
    }
  },
  close(){
    this.listShow = false
  }
}

}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
.shop-cart
  position fixed
  left 0
  bottom 0
  z-index 50
  width 100%
  height: 48px;
  .content
    display flex
    background $color-background
    color $color-light-grey
    &-left
      flex 1
      .logo-wrapper
        vertical-align middle
        display inline-block
        position relative
        top: -10px;
        margin 0 12px
        padding 6px
        width 56px
        height 56px
        border-radius 50%
        box-sizing border-box
        background #141d27
        .logo
          width 100%
          height 100%
          background $color-dark-grey
          border-radius 50%
          text-align center
          &.highlight
            background $color-blue
          .icon-24gl-cartFull3
            line-height 44px
            font-size $fontsize-large-xxx
            color #80858a
            &.highlight
              color $color-white
        .num
          position absolute
          top 0
          right 0
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size $fontsize-small-s
          font-weight bold
          color $color-white
          background $color-red
      .price
        display inline-block
        line-height 48px
        padding-right: 12px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size $fontsize-large
        font-weight 700
        &.highlight
          color $color-white
      .desc
        display inline-block
        line-height: 48px;
        font-size $fontsize-small-s
    .content-right
      flex 0 0 105px
      width: 105px;
      .pay
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: $fontsize-small;
        font-weight 700
        &.not-enough
          background #2b333b
        &.enough
          background $color-green
          color $color-white
  .shopcart-list
    position absolute
    left: 0;
    top: 0;
    width: 100%;
    z-index -1
    transform translate3d(0, -100%, 0)
    &.fold-enter-active, &.fold-leave-active
      transition all 0.5s
    &.fold-enter, &.fold-leave-to
      transform translate3d(0, 0, 0)
    .list-header
      display flex
      justify-content space-between
      padding: 0 18px;
      height: 40px;
      line-height: 40px;
      align-items center
      border-bottom: 1px solid $color-background-sss;
      background $color-background-ssss
      .title
        font-size $fontsize-medium
        color $color-background
      .empty
        font-size $fontsize-small
        color $color-blue
    .list-content
      padding 0 18px
      max-height 217px
      overflow hidden
      background #fff
      .food
        position relative
        padding 12px 0
        box-sizing border-box
        .name
          line-height 24px
          font-size 14px
          color rgb(7, 17, 27)
        .price
          position absolute
          right 90px
          bottom 12px
          line-height 24px
          font-size 14px
          font-weight 700
          color rgb(240, 20, 20)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom -2px
.masker
  background #07111b
  opacity 0.6
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  z-index 40
</style>