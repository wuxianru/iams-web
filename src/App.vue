<template>
  <div id="app">
    <maincontainer></maincontainer>
  </div>
</template>

<script>
import maincontainer from './components/maincontainer.vue';

export default {
  name: 'app',
  components: {
      maincontainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
