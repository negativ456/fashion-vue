<template>
  <div class="container">
    <div class="empty_cart" v-if="cartProducts.length === 0">The cart is empty</div>
  </div>
  <section v-if="cartProducts.length !== 0" class="cart">
    <div class="container">
      <div class="cart_details">
        <div class="cart_header">
          <div>
            <div class="cart_header_item">Product Details</div>
          </div>
          <div class="second_div">
            <div class="cart_header_item">Unite Price</div>
            <div class="cart_header_item">Quantity</div>
            <div class="cart_header_item">Shipping</div>
            <div class="cart_header_item">Subtotal</div>
            <div class="cart_header_item">Action</div>
          </div>
        </div>
        <div v-for="product of cartProducts" :key="product._id">
          <cart-item :product="product"></cart-item>
        </div>
      </div>
      <div class="buttons_block">
        <div @click="clearCart" class="cart_button">Clear shopping cart</div>
        <div class="cart_button">Continue shopping</div>
      </div>
    </div>
    <add-info></add-info>
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import cartItem from "@/components/CartComponents/cartItem";
import addInfo from "@/components/CartComponents/addInfo";

export default {
  name : "cartProducts",
  computed: mapGetters(["cartProducts"]),
  components: {
    cartItem, addInfo
  },
  methods: mapActions(['clearCart'])
}
</script>

<style scoped>
.empty_cart {
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 5px;

}
.second_div {
  width: 563px;
  justify-content: space-between;
  display: flex;
}
.cart_header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.015em;
  color: #222222;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
}

.buttons_block {
  display: flex;
  justify-content: space-between;
  margin-bottom: 65px;
  margin-top: 45px;
}
.buttons_block .cart_button {
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #4a4a4a;
  padding: 19px 38px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  user-select: none;
  cursor: pointer;
  transition: background-color .2s;
}
.cart_button:hover {
  background-color: #eaeaea;
}
</style>