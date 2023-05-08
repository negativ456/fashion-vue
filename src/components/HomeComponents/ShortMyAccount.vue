<template>
  <div>
    <router-link to="/account" class="item">My account</router-link>
    <div class="item">My orders</div>
    <div class="item" @click="logoutFunc">Logout</div>
    <div class="container_arrow">
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name : "shortMyAccount",
  inject: ['reload'],
  methods: {
    ...mapActions(['logout']),
    async logoutFunc() {
      await this.logout();
      await this.$router.push('/');
      this.reload();
    },
  }
}
</script>

<style scoped>
.main_block {
  position: absolute;
  top: 60px;
  right: -10px;
  padding: 20px 0;
  background-color: #fff;
  transition: opacity 0.2s, visibility .2s;
  opacity: 0;
  visibility: hidden;
  color: black;
  width: 170px;
  border: 1px solid #e8e8e8;
  z-index: 10;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%);
}
.item {
  padding-left: 15px;
  line-height: 30px;
  text-decoration: none;
  color: #222222;
  display: block;
}
.item:hover {
  background-color: #eaeaea;
}
.container_arrow {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -13px;
  left: 80px;
}
.arrow {
  width: 14px;
  height: 14px;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;
  transform: rotate(45deg);
}
</style>