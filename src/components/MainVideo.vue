<template>
  <div class="bannerVideo">
    <video muted id="backgroundVideo">
      <source src="../assets/background.mp4" type="video/mp4">
    </video>
    <div class="content">
      <VueSlickCarousel v-bind="settings">
        <div class="dudeSlide" v-for="item in items" :key="item.url">
          <img :src="item.url" alt="dude">
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
      items: [
        {
          url: require('../assets/dudes/dude1.png')
        },
        {
          url: require('../assets/dudes/dude2.png')
        },
        {
          url: require('../assets/dudes/dude3.png')
        },
        {
          url: require('../assets/dudes/dude4.png')
        },
        {
          url: require('../assets/dudes/dude5.png')
        },
        {
          url: require('../assets/dudes/dude6.png')
        },
      ]
    }
  },
  mounted() {
    this.todo();
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

    .dudeSlide img {
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
      .dudeSlide img{
        height: 200px;
      }
    }
  }
}

@media(max-width: 900px) {
  .bannerVideo {
    .content {
      .dudeSlide img {
        height: 150px;
      }
    }
  }
}

@media(max-width: 601px) {
  .bannerVideo {
    .content {
      .dudeSlide img {
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
