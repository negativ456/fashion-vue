<template>
  <div class="cart_item">
    <router-link :to="linkOpen" class="wrapper">
      <img :src="require(`../../assets/catalog_images/${product.img}.png`)" alt="cart_product" class="cart_img">
      <div class="cart_info_block">
        <p class="product_name">{{ product.name }}</p>
        <div class="stars_block">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="product_summary"><span class="product_quantity">{{product.quantity}}</span> x $<span class="product_price_1">{{product.price}}</span></div>
      </div>
    </router-link>
      <i class="fa-solid fa-circle-xmark" @click="deleteFromCart(product)"></i>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name : "CartItem",
  props: ['product'],
  methods: mapActions(['deleteFromCart']),
  computed: {
    linkOpen () {
      return `/catalog/${this.product._id}`
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  text-decoration: none;
}
.cart_info_block {
  margin-left: 20px;
}
.cart_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: solid 1px rgba(237, 237, 237, 0.74);
}
.cart_img {
  width: 72px;
  height: 85px;
}
.fa-star {
  font-size: 12px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #e4af48;
  margin-bottom: 10px;
}
.product_name {
  font-size: 12px;
  line-height: 1.2;
  font-weight: 800;
  text-transform: uppercase;
  color: #222222;
  margin-bottom: 10px;
}
.product_summary {
  font-size: 12px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #f16d7f;
}
.fa-circle-xmark {
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #c0c0c0;
  cursor: pointer;
  transition: color .2s;
}
.fa-circle-xmark:hover {
  color: black;
}
</style>