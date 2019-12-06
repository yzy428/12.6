<template>
  <div>
      <div class="home">
            <router-link to='/home/index'>首页</router-link>
        <router-link to='/home/my'>我的</router-link>
      </div>
     
        <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>