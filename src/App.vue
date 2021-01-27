<template>
  <div id="app">
    <Header/>
    <Home/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from './views/Header'
import Home from './views/Home'

export default {
  components: {
    Header,
    Home
  }
}
</script>

<style>
html {
  margin: 0;
  height:100%;
  background:#cef1f1;
}
</style>
