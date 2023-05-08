<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog_heading">
        <h3 class="catalog_header">Featured Items</h3>
        <p class="catalog_text">Shop for items based on what we featured in this week</p>
      </div>
      <div class="goods_gal">
        <Item v-for="item of catalogProducts" :key="item.id_product" :item="item"  ></Item>
      </div>
      <div class="box_button">
        <router-link to="/catalog" class="catalog_buy">Browse All Product
          <i class="fa-solid fa-arrow-right-long"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Item from './Item';
import {mapGetters, mapActions} from 'vuex';

export default {
  name : "CatalogComponent",
  components: {
    Item
  },
  computed: {
    ...mapGetters(['catalogProducts']),
    list: function() {
      return this.catalogProducts.slice(0, 8);
    }
  },
  methods: {
    ...mapActions(['getProducts']),

  },
  mounted() {
    this.getProducts({limit: 8});
  }
}
</script>

<style scoped>
.goods_gal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.catalog_buy {
  padding: 15px;
  text-align: center;
  background-color: #f16d7f;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  transition: color, background-color 0.2s;
  border: 1px solid #f16d7f;
}

.fa-arrow-right-long {
  color: #fff;
  margin-left: 9px;
}

.catalog_buy:hover {
  color: #f16d7f;
  background-color: #fff;
}

.catalog_buy:hover .fa-arrow-right-long {
  color: #f16d7f;
}

.box_button {
  width: 100%;
  display: flex;
  justify-content: center;
}
.catalog {
  margin-bottom: 80px;
}
.catalog_header {
  color: #222222;
  font-size: 30px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0.75px;
}
.catalog .catalog_text {
  color: #9f9f9f;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.35px;
}
.catalog .catalog_heading {
  text-align: center;
  width: 349px;
  margin: 0 auto 60px;
}
</style>