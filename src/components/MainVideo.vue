<template>
  <div class="bannerVideo">
    <video muted id="backgroundVideo">
      <source src="../assets/background.mp4" type="video/mp4">
    </video>
    <div class="content">

      <img class="line" src="../assets/animation.gif" alt="prodLine">
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.bannerVideo{
  position: relative;
  width: 100vw;
  max-width: 1920px;
  height: fit-content;
  #backgroundVideo{
    position: relative;
    width: 100%;
    z-index: 0;
  }
  .content{
    position: absolute;
    z-index: 1;
    bottom: 16px;
    left: 0;
    width: 100%;
    .line{
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      max-width: 100%;
    }
    .swiper{
      position: relative;
      z-index: 2;
      .swiper-wrapper{
        display: flex;
        align-items: baseline;
        padding-bottom: 100px;
      }
      .swiper-slide{
        position: relative;
      }
    }
  }
}
@media(min-width: 1500px){
  .bannerVideo{
    .content{
      .swiper{
        margin-bottom: 1.5%;
      }
    }
  }
}

@media(max-width: 1201px){
  .bannerVideo{
    .content{
      .swiper{
        margin-bottom: -5.5%;
        .swiper-slide{
          .dudeSlide{
            transform: scale(0.8);
            img{
              width: 100%;
            }
          }
        }
      }
    }
  }
}

@media(max-width: 900px){
  .bannerVideo{
    .content{
      .swiper{
        .swiper-slide{
          .dudeSlide{
            width: 60%;
            transform: none;
          }
        }
      }
    }
  }
}
@media(max-width: 601px){
  .bannerVideo{
    .content{
      .swiper{
        margin-bottom: -9.5%;
      }
    }
  }
}

@media(max-width: 426px){
  .bannerVideo{
    .content{
      .swiper{
        .swiper-wrapper{
          padding-bottom: 63px;
        }
      }
    }
  }
}
</style>
