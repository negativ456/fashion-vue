<template>
  <div class="size">
    <h3 class="sort_header">Size</h3>
    <div class="size_content">
      <div class="flex" v-for="item of availableSizes" :key="item">
        <label class="input_block">
          <input type="checkbox" name="register" class="real-checkbox-btn" :value="item" v-model="chosenSize" @change="$emit('filter', chosenSize)">
          <span class="custom-checkbox-btn"></span>
          <span class="size_item">{{item}}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "SizeFilter",
  data: () => {
    return {
      chosenSize: [],
      availableSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
    }
  }
}
</script>

<style scoped>
.sort_header {
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #6f6e6e;
  margin-bottom: 25px;
}
.size_content {
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #6f6e6e;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 65px);
}
.flex {
  display: flex;
}
.input_block {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  user-select: none;
  cursor: pointer;
}
.real-checkbox-btn:checked + .custom-checkbox-btn::before {
  transform: translate(-50%, -50%) scale(1);
}
.real-checkbox-btn {
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.custom-checkbox-btn::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: #ebebeb;
  background-image: url("../../assets/images/icons8-done.svg");
  background-position: center center;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%)  scale(0);
}
.custom-checkbox-btn {
  position: relative;
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  vertical-align: text-top;
}
.size_item {
  padding-left: 10px;
}
</style>