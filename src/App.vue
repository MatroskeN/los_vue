<template>
  <div id="app">
    <header>
      <div class="headerItem">About us</div>
      <div class="headerItem">history</div>
      <div class="headerItem">mAGIC EDeN</div>
      <div class="headerItem">roadmap</div>
      <div class="headerItem">stuff</div>
    </header>
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

<style lang="scss">
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
  header{
    display: flex;
    position: absolute;
    top: 50px;
    width: 100vw;
    justify-content: center;
    z-index: 10;
    .headerItem{
      font-family: 'soviet font',serif;
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 37px;
      color: #FFFFFF;
      margin-right: 50px;
      &:last-of-type{
        margin-right: unset;
      }
    }
  }
}

@media(max-width: 1024px){
  #app{
    header{
      top: 20px;
      .headerItem{
        margin-right: 10px;
        font-size: 15px;
      }
    }
  }
}

@media(max-width:768px){
  #app{
    header{
      .headerItem{
        margin-right: 10px;
        font-size: 9px;
        line-height: 12px;
      }
    }
  }
}

body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
</style>
