<template>
  <Weather msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Weather from './components/Weather.vue'
export default {
  name: 'App',
  components: {
    Weather
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>