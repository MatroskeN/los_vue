<template>
  <div class="bannerVideo">
    <video muted id="backgroundVideo">
      <source src="../assets/background.mp4" type="video/mp4">
    </video>
    <div class="content">
      <VueSlickCarousel v-bind="settings">
        <div class="dudeSlide" v-html="info">
        </div>
        <div class="dudeSlide" v-html="info">
        </div>
        <div class="dudeSlide" v-html="info">
        </div>
        <div class="dudeSlide" v-html="info">
        </div>
      </VueSlickCarousel>
      <img class="line" id="line" src="../assets/animation.gif" alt="prodLine">
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import axios from "axios";

export default {
  name: 'MainVideo',
  components: {VueSlickCarousel},
  data() {
    return {
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4500,
        pauseOnHover: false,
        cssEase: 'linear'
      },
      info: []
    }
  },
  mounted() {
    this.todo();
    let picID = 1;
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNjU0NzY2NjUzfQ.11N-fYB-gW6hQF23pyb_t9j1gqxmw8K8sJHKKgteS-A';
    for (let i = 0; i < 15; i++){
      axios
          .get('https://lots-universe.herokuapp.com/' + token + '/images/'+picID)
          .then(response => (this.info = response.data))
      picID++;
    }
  },
  methods: {
    todo: function () {
      this.checkHeight = setInterval(function () {
        let res = document.querySelector('#line').clientHeight;
        if (res > 0) {
          let dudes = document.querySelectorAll('.dudeSlide');
          dudes.forEach(element => {
            res = res - 5;
            element.style.marginBottom = res + 'px';
          })
        }
      }, 100);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bannerVideo {
  position: relative;
  width: 100vw;
  max-width: 1920px;
  height: fit-content;

  #backgroundVideo {
    position: relative;
    width: 100%;
    z-index: 0;
  }

  .content {
    position: absolute;
    z-index: 1;
    bottom: 16px;
    left: 0;
    width: 100%;

    .dudeSlide ::v-deep img {
      height: 393px;
    }

    .line {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      max-width: 100%;
    }
  }
}

@media(max-width: 1201px) {
  .bannerVideo {
    .content {
      .dudeSlide ::v-deep img{
        height: 200px;
      }
    }
  }
}

@media(max-width: 900px) {
  .bannerVideo {
    .content {
      .dudeSlide ::v-deep img {
        height: 150px;
      }
    }
  }
}

@media(max-width: 601px) {
  .bannerVideo {
    .content {
      .dudeSlide ::v-deep img {
        height: 80px;
      }
    }
  }
}

@media(max-width: 426px) {
  .bannerVideo {
    .content {
    }
  }
}
</style>
