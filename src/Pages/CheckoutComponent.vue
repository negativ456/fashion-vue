<template>
  <Header></Header>
  <BreadCrumbs :name="'checkout'"></BreadCrumbs>
  <OrderBlock></OrderBlock>
  <InfoBlock></InfoBlock>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/HomeComponents/Header.vue";
import InfoBlock from "@/components/HomeComponents/InfoBlock.vue";
import OrderBlock from "@/components/CheckoutComponents/OrderBlock.vue";
import Footer from "@/components/HomeComponents/Footer.vue";
import BreadCrumbs from "@/components/HomeComponents/Navigation/BreadCrumbs.vue";

export default {
  name : "CheckoutComponent" ,
  components : {Header, Footer, InfoBlock, OrderBlock, BreadCrumbs}
}
</script>

<style scoped>

</style>