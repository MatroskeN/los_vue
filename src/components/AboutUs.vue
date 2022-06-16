<template>
  <div class="about">
    <h2>About Us</h2>
    <div class="text">
      <div class="block">
        List of the Shadows decided to conquer a mountain consisting of cryptocurrencies,
        nft holders, WL and all sorts of 2D and 3D universes.
        The path to the top will be long and difficult,
        but our team is ready to go through it to tell you our story!
      </div>
      <div class="block">
        We are going to bring to this world the formation of new opportunities for designers and creators
        in developing a new and innovative product.
        Imagine! The International eco-community with opportunities for professional growth, development,
        collaborations in the sphere of their interests.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style lang="scss" scoped>
.about {
  margin: 134px auto 66px;
  max-width: 1044px;
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'soviet font', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin: 0 0 65px 0;
  }

  .text {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .block {
      font-family: 'Jura', serif;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 25px;
      color: #FFFFFF;
      max-width: 425px;
    }
  }
}
@media(max-width: 1200px){
  .about{
    margin-top: 30px;
    align-items: center;
    max-width: 600px;
    .text{
      flex-direction: column;
      align-items: center;
      .block{
        text-align: justify;
        &:first-of-type{
          margin-bottom: 30px;
        }
      }
    }
  }
}
@media (max-width: 600px){
  .about{
    max-width: 300px;
    h2{
      font-size: 30px;
      margin-bottom: 30px;
    }
    .text{
      .block{
        font-size: 15px;
        line-height: 20px;
      }
    }
  }
}
</style>