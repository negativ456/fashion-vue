<template>
  <section class="container">
    <div class="wrapper">
      <AccountOptions @selected="selectOption"></AccountOptions>
      <OpenedOption :selectedItem="selectedItem"></OpenedOption>
    </div>
  </section>
</template>

<script>
import AccountOptions from "@/components/MyAccountComponents/AccountOptions";
import OpenedOption from "@/components/MyAccountComponents/OpenedOption";
export default {
  name : "AccountMain",
  components: {AccountOptions, OpenedOption},
  data: () => {
    return {
      selectedItem: ''
    }
  },
  methods: {
    selectOption(data) {
      this.selectedItem = data;
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  margin-bottom: 150px;
}
</style>