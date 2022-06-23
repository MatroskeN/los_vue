<template>
  <video id="aboutVideo" muted loop>
    <source :src="videoSrc" type="video/mp4">
  </video>
</template>

<script>
export default {
  name: "AboutVideo",
  data() {
    let videoSrc;
    return{
      videoSrc
    }
  },
  mounted(){
    this.toPlay();
  },
  methods: {
    toPlay: function(){
      let video = document.querySelector('#aboutVideo');
      video.oncanplay = function(){
        video.play()
      }
      this.videoSrc = require('../assets/about.mp4');
    }
  }
}
</script>

<style lang="scss" scoped>
  video{
    width: 100vw;
    max-width: 1920px;
  }
</style>