<template>
  <div class="cart_box_main">
    <router-link to="/cart"  >
      <img src="../../assets/images/cart.svg" alt="cart" class="cart">
    </router-link>
    <div class="cart_menu">
      <div class="cart_block">
        <CartItem v-for="product of cartProducts" :key="product._id" :product="product"></CartItem>
      </div>
      <div class="total_block">
        <p class="total">TOTAL</p>
        <p class="total price"><span class="dollar">$</span><span class="total_price">{{ sumPrice }}</span></p>
      </div>
      <router-link to="/checkout" class="checkout">CHECKOUT</router-link>
      <router-link to="/cart" class="go_to_cart">GO TO CART</router-link>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/HomeComponents/CartItem";
import {mapGetters, mapActions, mapMutations} from 'vuex';



export default {
  name : "CartComponent",
  components : {CartItem},
  computed: mapGetters(["cartProducts", "sumPrice"]),
  data() {
    return {
      isHidden: true
    }
  },
  methods: {
    ...mapActions(['getCartProducts', 'putJson', 'postJson']),
    ...mapMutations(["addNewProduct", 'deleteProduct']),
  },
  mounted() {
    this.getCartProducts();
  }
}
</script>


<style scoped>
.cart_box_main:hover .cart_menu {
  opacity: 1;
  visibility: visible;
}
.cart_box_main {
  display: flex;
  height: 43px;
  align-items: center;

}
.cart_menu {
  position: absolute;
  top: 50px;
  left: -30px;
  padding: 20px;
  background-color: #fff;
  z-index: 2;
  transition: opacity 0.3s, visibility .3s;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%);

}
.cart {
  width: 32px;
  height: 29px;
  cursor: pointer;
}
.cart_menu .total_block {
  display: flex;
  justify-content: space-between;
}
.cart_menu .total {
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
  margin-bottom: 30px;
  margin-top: 20px;
}
.cart_menu .checkout {
  display: block;
  padding: 20px 75px;
  border: 1px solid #f16d7f;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #f16d7f;
  margin-bottom: 10px;
  transition: background-color .2s, color .2s;
}
.checkout:hover {
  background-color: #f16d7f;
  color: #fff;
}
.cart_menu .go_to_cart {
  text-align: center;
  display: block;
  padding: 20px 0;
  border: 1px solid #eaeaea;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #4a4a4a;
  transition: background-color .2s;
}
.go_to_cart:hover {
  background-color: #eaeaea;
}
</style>