<template>
  <section class="adv">
    <div class="container adv_block">
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
  </section>
</template>

<script>
export default {
  name : "AdvComponent"
}
</script>

<style scoped>
.adv {
  background-color: #000;
}
.adv .offer_description {
  display: flex;
  align-items: center;
  height: 341px;
}
.adv .offer_img {
  width: 45px;
  height: 40px;
  margin-bottom: 30px;
}
.adv .offer_block {
  text-align: center;
}
.adv .offer_part {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.adv .offer_item_header {
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #fbfbfb;
  margin-bottom: 20px;
}
.adv .offer_item_text {
  font-size: 14px;
  line-height: 23px;
  font-weight: 300;
  letter-spacing: 0.025em;
  color: #fbfbfb;
}
</style>