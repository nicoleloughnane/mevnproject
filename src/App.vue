<template>
<div >
  <my-navbar></my-navbar>
  <router-view></router-view>

 </div>
</template>

<script>
import MyNavbar from './components/MyNavbar.vue';

export default {
  components: {
    MyNavbar
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap');

* {
  box-sizing: border-box;
}

html {
    font-family: 'Zen Kurenaido', sans-serif;
}

body {
  margin: 0;
  text-align: center;
}
</style>
