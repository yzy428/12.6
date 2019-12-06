<template>
  <div>
    <div>
         <input type="text">
    </div>
     <div class="bottom">
         <div v-for="item in data" :key="item.id">
         <img :src='item.img' alt="">
         <p>{{item.title}}</p>
      </div></div>
    <van-swiper :autoplay='1000' indicator-color='white'>
     <van-swiper-item>1</van-swiper-item>
 <van-swiper-item>2</van-swiper-item>
  <van-swiper-item>3</van-swiper-item>
   <van-swiper-item>4</van-swiper-item>


    </van-swiper>

  </div>
</template>

<script>

export default {
 data(){
   return{
    data:[]
   }
 },
 computed:{
      list(){
       this.data= this.$store.state.list
       
      }
 },
 mounted(){
   this.$store.dispatch({type:'getList'})
  
 }
}
</script>

<style>

</style>