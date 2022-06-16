<template>
  <div id="app">
    <MainVideo/>
    <AboutUs/>
    <AboutVideo/>
  </div>
</template>

<script>
import MainVideo from '@/components/MainVideo.vue'
import AboutUs from '@/components/AboutUs.vue'
import AboutVideo from "@/components/AboutVideo"

export default {
  name: 'App',
  components: {
    MainVideo,
    AboutUs,
    AboutVideo
  }
}
</script>

<style>
@font-face {
  font-family: 'soviet font';
  src: url('fonts/soviet-font.woff2') format('woff2'),
  url('fonts/soviet-font.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Jura';
  font-style: normal;
  font-weight: 300;
  src: local(''),
  url('fonts/jura-v23-latin_cyrillic-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */ url('fonts/jura-v23-latin_cyrillic-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* jura-regular - latin_cyrillic */
@font-face {
  font-family: 'Jura';
  font-style: normal;
  font-weight: 400;
  src: local(''),
  url('fonts/jura-v23-latin_cyrillic-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */ url('fonts/jura-v23-latin_cyrillic-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  background: #260405;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
</style>
