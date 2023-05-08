<template>
  <section>
    <div class="container">
      <div class="add_items">
        <div class="add_header">You may like also</div>
        <div class="add_catalog">
          <Item v-for="item of list" :key="item.id_product" :item="item"></Item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Item from "@/components/HomeComponents/Item";
import {mapGetters} from "vuex";
export default {
  name : "MiniCatalog",
  components: {
    Item
  },
  computed: {
    ...mapGetters(['catalogProducts']),
    list: function () {
      return this.catalogProducts.slice(0, 4);
    }
  },
}
</script>

<style scoped>
.add_catalog {
  display: flex;
  justify-content: space-between;
}

.add_header {
  font-size: 24px;
  line-height: 20px;
  font-weight: 900;
  text-transform: uppercase;
  color: #4d4d4d;
  text-align: center;
  margin-bottom: 70px;
}
</style>