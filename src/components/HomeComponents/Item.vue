<template>
  <div class="item">
    <router-link :to="linkOpen" class="catalog_item ">
      <img :src="require(`../../assets/catalog_images/${item.img}.png`)" alt="img" class="catalog_img">
      <div class="item_description">
        <p class="description_heading">{{ item.name }}</p>
        <p class="item_price">$ <span class="product_price">{{ item.price }}</span></p>
      </div>
    </router-link>
    <div class="cart_box">
      <div class="cart_link" @click="add(item)">
        <img src="../../assets/images/Forma_1_copy.svg" alt="cart">
        <div>
          <p class="add_text">{{added}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data: () => {
    return {
      added: 'Add to Cart'
    }
  },
  name : "ItemComponent",
  props: ['item'],
  methods: {
    ...mapActions(['addProduct']),
    add(product) {
      console.log ({...product, quantity: 1})
      this.addProduct({...product, quantity: 1});

      this.added = 'Added to Cart';
    }
  },
  computed: {
    linkOpen () {
      return `/catalog/${this.item._id}`
    }
  }

}
</script>

<style scoped>
.item {
  position: relative;
  transition: filter 0.2s, box-shadow 0.2s;
  margin-bottom: 60px;
}
.cart_box {
  display: none;
  position: absolute;
  top: 26%;
  left: 26%;
  user-select: none;
}
.cart_box:hover {
  box-shadow: #fff;
}
.cart_link {
  display: flex;
  padding: 10px;
  border: 1px solid #fff;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
}
.add_text {
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  margin-left: 8px;
}
.item:hover .cart_box {
  display: flex;
}
.catalog_item {
  display: block;
  text-decoration: none;
  transition: all 0.2s;
}
.item:hover {
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
}
.item:hover .catalog_img {
  filter: brightness(30%);
}
.catalog_img {
  width: 261px;
  height: 279px;
}
.description_heading {
  color: #222222;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 17px;
  text-transform: uppercase;
}
.item_price {
  color: #f16d7f;
  font-weight: 700;
  font-size: 16px;
}
.item_description {
  padding: 20px;
}
</style>