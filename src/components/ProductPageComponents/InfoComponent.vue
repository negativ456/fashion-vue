<template>
  <div class="slider_info">
    <div class="container info_card">
      <div class="slider_info_card">
        <p class="collection">Women collection</p>
        <div class="line_mini">
          <div class="marker"></div>
        </div>
        <p class="card_header">{{product.name}}</p>
        <p class="card_descr">{{product.description}}</p>
        <div class="material_descr">
          <p class="made">Material: <span class="mat_highlighted">{{product.material}}</span></p>
          <p class="made">Designer: <span class="mat_highlighted">BINBURHAN</span></p>
        </div>
        <div class="price">${{product.price}}</div>
        <hr class="line">
        <div class="select" >
          <div class="choose_box">
            <div class="color_box">
              <OptionBlock :title="'Choose Color'" :array="['Red', 'Blue', 'Green']" :name="'color'" @selected="select"></OptionBlock>
            </div>
            <div class="size_box">
              <OptionBlock :title="'Choose Size'" :array="['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']" :name="'size'" @selected="select"></OptionBlock>
            </div>
            <div class="quantity_box">
              <OptionBlock :title="'Quantity'" :array="['1', '2', '3', '4', '5']" :name="'quantity'" @selected="select"></OptionBlock>
            </div>
          </div>
          <div class="add_to_cart" @click="addToCart" v-if="!bought">
            <i class="fa-solid fa-cart-shopping"></i>
            <p>Add to cart</p>
          </div>
          <router-link to="/cart" class="add_to_cart" v-else>
            <i class="fa-solid fa-check"></i>
            <p>The product was added to cart</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OptionBlock from "@/components/ProductPageComponents/OptionBlock";
import { mapGetters, mapActions} from "vuex";

export default {
  name : "InfoComponent",
  props: ['productId'],
  data () {
    return {
      selectedItems: {
        color: "Red",
        size: "XXS",
        quantity: "1"
      },
      bought: false
    }
  },
  components: {
    OptionBlock
  },
  methods: {
    select(data) {
      this.selectedItems[Object.keys(data)[0]] = data[Object.keys(data)[0]];
    },
    ...mapActions(['addProduct']),
    addToCart() {
      this.bought = true;
      this.addProduct({...this.product, ...this.selectedItems});
    }
  },
  computed: {
    ...mapGetters(['getProduct']),
    product: function () {
      return this.getProduct(this.productId);
    }
  },
  created() {
    //this.getProducts();
  },

}
</script>

<style scoped>
.slider_info {
  margin-bottom: 70px;
}
.slider_info .slider_info_card {
  padding-top: 43px;
  padding-bottom: 74px;
  width: 100%;
  transform: translate(0, -50px);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eaeaea;
}
.slider_info .collection {
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  color: #f16d7f;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.slider_info .card_header {
  font-size: 18px;
  line-height: 24px;
  font-weight: 900;
  text-transform: uppercase;
  color: #4d4d4d;
  margin-bottom: 67px;
}
.slider_info .card_descr {
  text-align: center;
  width: 620px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  color: #5e5e5e;
  margin-bottom: 28px;
}
.slider_info .price {
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  color: #ef5b70;
  margin-bottom: 43px;
}
.slider_info .line {
  width: 642px;
  background-color: #ef5b70;
  border: 1px solid #eaeaea;
  margin-bottom: 65px;
}
.slider_info .form_header {
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  color: #2f2f2f;
  text-transform: uppercase;
}
.slider_info .select {
  width: 537px;
}
.slider_info .select .choose_box {
  justify-content: space-between;
  display: flex;
  margin-bottom: 28px;
}
.add_to_cart {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  padding: 20px 0;
  color: #ef5b70;
  background-color: #ffffff;
  border: 1px solid #ef5b70;
  cursor: pointer;
  transition: background-color .2s, color .2s;
  text-decoration: none;

}
.add_to_cart:hover {
  background-color: #ef5b70;
  color: #fff;
}
.fa-solid {
  font-size: 20px;
  margin-right: 15px;
}


.slider_info .material_descr {
  display: flex;
  width: 335px;
  justify-content: space-between;
  margin-bottom: 37px;
}
.slider_info .material_descr .made {
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  color: #b9b9b9;
  text-transform: uppercase;
}
.slider_info .material_descr .mat_highlighted {
  color: #2f2f2f;
}
.slider_info .form_header {
  display: block;
}
.slider_info .chooser {
  width: 144px;
  height: 35px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
}
.marker {
  position: absolute;
  top: -1px;
  left: 40px;
  width: 63px;
  height: 3px;
  background-color: #ef5b70;
}
.line_mini {
  width: 147px;
  height: 1px;
  background-color: #eaeaea;
  position: relative;
  margin-bottom: 18px;
}
</style>