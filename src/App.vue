<template>
<div >
  <my-header></my-header>
  <router-view></router-view>

 </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';

export default {
  components: {
    MyHeader
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
