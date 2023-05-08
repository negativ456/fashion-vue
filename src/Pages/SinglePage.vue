<template>
  <Header></Header>
  <SwiperComponent></SwiperComponent>
  <InfoComponent :productId="productId" ></InfoComponent>
  <MiniCatalog></MiniCatalog>
  <InfoBlock></InfoBlock>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/HomeComponents/Header.vue";
//import SliderComponent from "@/components/ProductPageComponents/SliderComponent";

import {mapGetters, mapActions} from "vuex";
import InfoComponent from "@/components/ProductPageComponents/InfoComponent.vue";
import InfoBlock from "@/components/HomeComponents/InfoBlock.vue";
import Footer from "@/components/HomeComponents/Footer.vue";
import MiniCatalog from "@/components/ProductPageComponents/MiniCatalog.vue";
import SwiperComponent from "@/components/ProductPageComponents/SwiperComponent.vue";
export default {
  name : "SinglePage",
  data () {
    return {
      usedComponent: ''
    }
  },
  components: {
    MiniCatalog ,
    Header, SwiperComponent, InfoComponent, InfoBlock, Footer,
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  computed: {
    ...mapGetters(['getProduct']),
    productId () {
      console.log (this.$route.params.id)
      return this.$route.params.id;
    },

  },
  mounted() {
    this.getProducts();
  }
  //methods: mapActions(['getProducts']),
  // created() {
  //   this.getProducts.then(this.usedComponent = 'InfoBlock')
  // }
}
</script>

<style scoped>

</style>