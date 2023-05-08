<template>
  <div class="option_open_block">
    <h2 class="option_header">{{this.selectedItem}}</h2>
    <div class="option_block">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import OpenProfile from "@/components/MyAccountComponents/OpenOptions/OpenProfile";
import OpenOrders from "@/components/MyAccountComponents/OpenOptions/OpenOrders";

export default {
  name : "OpenSetting",
  props: ['selectedItem'],
  components: {
    OpenProfile, OpenOrders
  },

  computed: {
    currentComponent: function () {
      return `Open${this.correctLine}`;
    },
    correctLine: function () {
      return this.selectedItem.slice(3)[0]?.toUpperCase() + this.selectedItem.slice(4)
    }
  }
}
</script>

<style scoped lang="scss">
.option_open_block {
  width: 100%;
  margin-left: 48px;
}

.option_header {
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 10px;
}
.option_block_header {
  margin-bottom: 30px;
  font-weight: 400;
}

</style>