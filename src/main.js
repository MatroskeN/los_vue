import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let video = document.getElementById("backgroundVideo")

document.addEventListener("DOMContentLoaded", async function () {
  await video.play();
  let pauseVideo = async () => {
    video.addEventListener('ended', endHandler, false);
    await new Promise((resolve) => setTimeout(resolve, 3400));
    video.pause();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    video.play();
  }
  await pauseVideo();

  video.addEventListener('ended', endHandler, false);

  function endHandler() {
    video.play();
    pauseVideo();
  }
});
