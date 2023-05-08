<template>
  <Header ></Header>
  <BreadCrumbs :name="'cart'"></BreadCrumbs>
  <cart-products></cart-products>
  <info-block></info-block>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/HomeComponents/Header.vue";
import cartProducts from "@/components/CartComponents/cartProducts.vue";
import InfoBlock from "@/components/HomeComponents/InfoBlock.vue";
import Footer from "@/components/HomeComponents/Footer.vue";
import BreadCrumbs from "@/components/HomeComponents/Navigation/BreadCrumbs.vue";


export default {
  name : "CartComponent",
  components: {
      Header, cartProducts, InfoBlock, Footer, BreadCrumbs
  }
}
</script>

<style scoped>

</style>