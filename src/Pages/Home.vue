<template>
  <Header></Header>
  <Banner></Banner>
  <Offer></Offer>
  <Catalog></Catalog>
  <Discount></Discount>
  <InfoBlock></InfoBlock>
  <Footer></Footer>
</template>

<script>
import Header from '../components/HomeComponents/Header.vue';
import Banner from '../components/HomeComponents/Banner.vue';
import Offer from '../components/HomeComponents/Offer.vue';
import Catalog from '../components/HomeComponents/Catalog.vue';
import Discount from '../components/HomeComponents/Discount.vue';
import InfoBlock from "@/components/HomeComponents/InfoBlock.vue";
import Footer from "@/components/HomeComponents/Footer.vue";

export default {
  name : "HomeComponent",
  components: {
    Header, Banner, Offer, Catalog, Discount, InfoBlock,
    Footer
  }
}
</script>

<style scoped>

</style>