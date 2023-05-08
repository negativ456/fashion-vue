<template>
  <Header></Header>
  <BreadCrumbs :name="'account'"></BreadCrumbs>
  <AccountMain></AccountMain>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/HomeComponents/Header.vue";
import Footer from "@/components/HomeComponents/Footer.vue";
import AccountMain from "@/components/MyAccountComponents/AccountMain.vue";
import BreadCrumbs from "@/components/HomeComponents/Navigation/BreadCrumbs.vue";

export default {
  name : "MyAccount",
  components: {Header, Footer, AccountMain, BreadCrumbs}
}
</script>

<style scoped>

</style>