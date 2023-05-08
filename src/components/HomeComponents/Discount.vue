<template>
  <section>
    <div class="container">
      <div class="offer">
        <div class="offer_img_main">
          <div class="offer_main">
            <p class="offer_text ">30% <span class="offer_highlighted">offer</span></p>
            <p class="offer_text main">for women</p>
          </div>
        </div>
        <div class="offer_description">
          <div class="offer_part">
            <img class="offer_img" src="../../assets/offer_images/car.svg" alt="car">
            <div class="offer_block">
              <p class="offer_item_header">Free Delivery</p>
              <p class="offer_item_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
          </div>
          <div class="offer_part">
            <img class="offer_img" src="../../assets/offer_images/percent.svg" alt="percent">
            <div class="offer_block">
              <p class="offer_item_header">Sales & discounts</p>
              <p class="offer_item_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
          </div>
          <div class="offer_part">
            <img class="offer_img" src="../../assets/offer_images/crown.svg" alt="crown">
            <div class="offer_block">
              <p class="offer_item_header">Quality assurance</p>
              <p class="offer_item_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name : "DiscountComponent"
}
</script>

<style scoped>
.offer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}
.offer_img_main {
  background-image: url(../../assets/offer_images/offer.png);
  width: 767px;
  height: 529px;
  position: relative;
}
.offer_img_main .offer_main {
  position: absolute;
  top: 146px;
  left: 40px;
}
.offer_img_main .offer_main .offer_text {
  color: #ffffff;
  font-size: 54px;
  font-weight: 700;
  text-transform: uppercase;
}
.offer_img_main .offer_main .offer_highlighted {
  color: #f16d7f;
}
.offer_img_main .offer_main .main {
  font-size: 32px;
  letter-spacing: 0.9px;
}
.offer .offer_description {
  width: 373px;
  height: 529px;
  background-color: #222224;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.offer .offer_description .offer_part {
  display: flex;
  align-items: flex-start;
}
.offer .offer_description .offer_part:first-child {
  margin-top: 48px;
}
.offer .offer_description .offer_block {
  width: 220px;
}
.offer .offer_description .offer_img {
  margin-right: 33px;
  margin-left: 36px;
}
.offer .offer_description .offer_item_header {
  color: #fbfbfb;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 17px;
}
.offer .offer_description .offer_item_text {
  color: #fbfbfb;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 60px;
}
</style>