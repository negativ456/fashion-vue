<template>
  <div class="cart_section">
    <router-link :to="linkOpen" class="cart_general">
      <img :src="require(`../../assets/catalog_images/${product.img}.png`)" alt="photo" class="cart_img">
      <div class="cart_section_descr">
        <h3 class="cart_section_descr_header">{{product.name}}</h3>
        <p class="cart_section_descr_add"><span class="cart_highlighted">Color: </span>{{product.color}}</p>
        <p class="cart_section_descr_add"><span class="cart_highlighted">Size: </span>{{product.size}}</p>
      </div>
    </router-link>
    <div class="cart_option">${{product.price}}</div>
    <div class="cart_option">
      <input class="number_items" type="number" min="1" v-model="quantity" @change="addProduct({...product, quantity})">
    </div>
    <div class="cart_option">Free</div>
    <div class="cart_option">${{product.price * product.quantity}}</div>
    <i class="cart_option fa-solid fa-times-circle" @click="deleteFromCart(product)"></i>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name : "cartItem",
  data: () => {
    return {
      quantity: 1
    }
  },
  props: ['product'],
  methods: {
    ...mapActions(['deleteFromCart', 'addProduct']),
    ...mapMutations(['increaseSum', 'initializeSum']),
  },
  computed: {
    linkOpen () {
      return `/catalog/${this.product._id}`
    }
  },
  mounted() {
    this.quantity = this.product.quantity
  }
}
</script>

<style scoped>
.cart_section_descr {
  width: 393px;
}
.fa-times-circle {
  color: #c0c0c0;
  transition: color .2s;
}

.fa-times-circle:hover {
  color: black;
}
.cart_section_descr_header {
  font-size: 13px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #222222;
  margin-bottom: 40px;
}

.cart_section_descr_add {
  font-size: 13px;
  line-height: 20px;
  font-weight: 300;
  color: #6f6e6e;
}

.cart_highlighted {
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: #575757;
}

.cart_img {
  width: 100px;
  height: 115px;
  margin-right: 20px;
}

.cart_general {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.cart_option {
  display: flex;
  justify-content: center;
}

.cart_option:before {
  cursor: pointer;
}



.cart_option:nth-of-type(1) {
  width: 75px;
}

.cart_option:nth-of-type(2) {
  width: 67px;
}

.cart_option:nth-of-type(3) {
  width: 59px;
}

.cart_option:nth-of-type(4) {
  width: 63px;
}

.cart_option:last-child {
  width: 49px;
}

.number_items {
  text-align: center;
  width: 54px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
}

.cart_section {
  padding: 20px 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
}




</style>