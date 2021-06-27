<template>
  <div class="ratings" ref="ratings"></div>
</template>
<script>
const ERR_OK=0;
const response=require('../../common/data/ratings.json');
export default {
  data(){
    return{
      ratings:[]
    }
  },
  created() {
    if(response.errno===ERR_OK){
      this.ratings=response.data
      this.$nextTick(()=>{
        this.scroll=new BScroll(this.$refs.ratings,{
          click:true
        })
      })
    }
  },
}
</script>

<style>

</style>