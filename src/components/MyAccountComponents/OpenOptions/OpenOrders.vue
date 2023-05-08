<template>
  <div class="order_block">
    <div class="empty_block">
      <h3 class="empty_header">My purchases</h3>
      <p class="empty_header2">We're sorry</p>
      <p class="empty_description">When you have bought something online you´ll find it here.</p>
      <router-link to="/catalog" class="empty_button" >Take me to the fashion</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name : "OpenOrders"
}
</script>

<style scoped lang="scss">
.empty_block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  .empty_header {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .empty_header2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .empty_button {
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #f16d7f;
    color: #f16d7f;
    font-size: 16px;
    font-weight: 400;
    margin-top: 30px;
    text-decoration: none;
    transition: background-color .2s, color .2s;
  }
  .empty_button:hover {
    background-color: #f16d7f;
    color: #fff;
  }
}
</style>