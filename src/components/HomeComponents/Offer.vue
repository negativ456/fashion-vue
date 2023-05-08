<template>
  <section>
    <div class="container">
      <div class="offer_page">
        <div class="first_part">
          <a href="#" class="offer_item first">
            <div class="description_item">hot deal <br><span class="highlighted">for men</span></div>
          </a>
          <a href="#" class="offer_item second">
            <div class="description_item">luxurious & trendy <br><span class="highlighted">accessories</span></div>
          </a>
        </div>
        <div class="second_part">
          <a href="#" class="offer_item third">
            <div class="description_item">30% offer <br><span class="highlighted">women</span></div>
          </a>
          <a href="#" class="offer_item fourth">
            <div class="description_item">new arrivals <br><span class="highlighted">for kids</span></div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name : "OfferComponent"
}
</script>

<style scoped>
.offer_page {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}
.offer_page .offer_item {
  position: relative;
  width: 560px;
  display: block;
  transition: transform 0.2s;
}
.offer_page .offer_item:hover {
  transform: scale(1.05, 1.05);
}
.offer_page .first {
  background-image: url(../../assets/images/man.png);
  height: 542px;
  margin-bottom: 20px;
}
.offer_page .second {
  background-image: url(../../assets/images/accessoires.png);
  height: 261px;
}
.offer_page .third {
  background-image: url(../../assets/images/woman.png);
  height: 261px;
  margin-bottom: 20px;
}
.offer_page .fourth {
  background-image: url(../../assets/images/kid.png);
  height: 542px;
}
.offer_page .description_item {
  padding: 16px 20px;
  text-transform: uppercase;
  color: #222222;
  font-size: 18px;
  font-weight: 900;
  position: absolute;
  top: 26px;
  background-color: #ffffff;
}
.offer_page .description_item .highlighted {
  color: #f16d7f;
  font-size: 30px;
  letter-spacing: 0.75px;
}
</style>