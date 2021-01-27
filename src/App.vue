<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './views/Header'

export default {
  components: {
    Header
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
