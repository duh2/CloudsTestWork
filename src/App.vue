<template>
  <div id="app">
 <YandexMap/>
  </div>
</template>

<script>
  import YandexMap from "@/components/Maps/YandexMap";
export default {

  name: 'App',
  components: {YandexMap
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.ymap-container{
  width: 750px;
  height: 500px;
  border: 1px solid #cccccc;
  border-radius: 3px;
}
</style>
