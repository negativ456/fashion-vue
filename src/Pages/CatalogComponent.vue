<template>
  <Header></Header>
  <BreadCrumbs :name="'catalog'"></BreadCrumbs>
  <CatalogBlock></CatalogBlock>
  <AdvBlock></AdvBlock>
  <InfoBlock></InfoBlock>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/HomeComponents/Header.vue";
import BreadCrumbs from "@/components/HomeComponents/Navigation/BreadCrumbs.vue";
import InfoBlock from "@/components/HomeComponents/InfoBlock.vue";
import Footer from "@/components/HomeComponents/Footer.vue";
import AdvBlock from "@/components/CatalogComponents/AdvBlock.vue";
import CatalogBlock from "@/components/CatalogComponents/CatalogBlock.vue";
export default {
  name : "CatalogComponent",
  components: {
    Header, InfoBlock, Footer, AdvBlock, CatalogBlock, BreadCrumbs
  }
}
</script>

<style scoped>

</style>