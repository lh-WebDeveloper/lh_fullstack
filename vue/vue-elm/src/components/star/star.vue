<template>
  <div class="star">
    <span class="star-item" v-for="(item, index) in starList" :key="index" :class="item"></span>
  </div>
</template>
<script>
export default {
  props: {
    score: {
      type:Number
    },
  },
  data() {
    return {
      
    };
  },
  computed: {
    starList: function () {
      let result = [];
      const sellerScore = Math.floor(this.score);
      // 先将on添加到list中
      for (let i = 0; i < sellerScore; i++) {
        result.push("on");
      }
      // 若不满5个，剩下的添加off直到满5个为止
      for (let i = result.length; i < 5; i++) {
        result.push("off");
      }
      return result;
    },
  },
};
</script>
<style lang="stylus">
.star-item 
  display inline-block
  width 25px
  height 25px
  background-size 30px 30px
  margin 10px 10px 0 10px
  &.on 
    background-image url("./rating_star_small_on.png")
  
  &.off 
    background-image url("./rating_star_small_off.png")
    
</style>