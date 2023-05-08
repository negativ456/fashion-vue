<template>
  <div class="container">
    <section class="accordion">
      <OrderDetails v-for="n of 6" :key="n"></OrderDetails>
    </section>
  </div>
</template>

<script>
import OrderDetails from "@/components/CheckoutComponents/OrderDetails";
export default {
  name : "OrderBlock",
  components: {
    OrderDetails
  }
}
</script>

<style scoped>

</style>