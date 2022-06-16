<template>
  <video muted autoplay loop>
    <source src="../assets/about.mp4" type="video/mp4">
  </video>
</template>

<script>
export default {
  name: "AboutVideo"
}
</script>

<style lang="scss" scoped>
  video{
    width: 100vw;
    max-width: 1920px;
  }
</style>