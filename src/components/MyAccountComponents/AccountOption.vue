<template>
  <div class="main_block">
    <div class="add_block">
      <i class="fa-solid fa-bag-shopping"></i>
      <p class="option_name">{{name}}</p>
    </div>
    <i class="fa-solid fa-angle-right"></i>
  </div>
</template>

<script>
export default {
  name : "AccountOption",
  props: ['name']
}
</script>

<style scoped>
.main_block {
  display: flex;
  width: 325px;
  justify-content: space-between;
  padding: 20px 10px;
  align-items: center;
  cursor: pointer;
}
.add_block {
  display: flex;
}
.option_name {
  margin-left: 15px;
}
</style>