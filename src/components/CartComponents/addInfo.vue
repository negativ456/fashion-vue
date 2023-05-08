<template>
  <section class="">
    <div class="container product_info">
      <form class="product_block">
        <h3 class="product_block_header">Shipping address</h3>
        <select class="product_input city_select" name="" id=""></select>
        <input type="text" class="product_input" placeholder="State">
        <input type="text" class="product_input" placeholder="Postcode / Zip">
        <input type="submit" class="product_submit" value="Get a quote">
      </form>
      <div class="product_block">
        <h3 class="product_block_header">Coupon discount</h3>
        <p class="product_block_descr">Enter your coupon code if you have one</p>
        <input type="text" class="product_input" placeholder="State">
        <input type="submit" class="product_submit" value="Apply coupon">
      </div>
      <div class="product_block last">
        <div class="product_block_total">
          <div class="prices">
            <p class="sub_total">Sub total <span class="sub_total sub_price">$900</span></p>
            <p class="grand_total">Grand total <span class="grand_total grand_price">${{ sumPrice }}</span></p>
          </div>
          <a href="#" class="checkout_button">Proceed to checkout</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name : "addInfo",
  computed: mapGetters(['sumPrice'])
}
</script>

<style scoped>
.product_info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
}
.product_info .product_block {
  width: 355px;
}
.product_info .product_block_header {
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
  margin-bottom: 20px;
}
.product_info .product_input {
  width: 336px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  margin-bottom: 20px;
  padding-left: 17px;
}
.product_info .last {
  width: 269px;
}
.product_info .city_select {
  width: 100%;
}
.product_info .product_submit {
  font-size: 11px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #4a4a4a;
  padding: 12px 14px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
}
.product_info .product_block_descr {
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
  color: #000000;
  margin-bottom: 25px;
}
.product_info .product_block_total {
  width: 100%;
  background-color: #f5f3f3;
  padding: 40px 43px;
}
.product_info .sub_total {
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #4a4a4a;
  margin-bottom: 15px;
}
.product_info .sub_price {
  margin-left: 10px;
}
.product_info .prices {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 17px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e2e2;
}
.product_info .grand_total {
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
}
.product_info .grand_price {
  color: #f16d7f;
  margin-left: 10px;
}
.product_info .checkout_button {
  display: block;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  padding: 16px 38px;
  background-color: #f16d7f;
  transition: color, background-color 0.2s;
  border: 1px solid #f16d7f;
}
.product_info .checkout_button:hover {
  color: #f16d7f;
  background-color: #fff;
  border: 1px solid #f16d7f;
}
</style>