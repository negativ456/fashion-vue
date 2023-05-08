<template>
    <router-view v-if="isRouterAlive"></router-view>
</template>

<script>
//import Home from './components/HomeComponents/Header';

export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      })
    }
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: Lato, serif;
  }
  .container {
    width: 1140px;
    margin: 0 auto;
  }
</style>
