<template>
  <div class="select_block">
    <div class="select_title">{{title}}</div>
    <div class="select" @click="isHidden = !isHidden">
      <div class="select_header">
        <span class="select_current">{{ selectCurrent }}</span>
        <i class="fa-solid fa-angle-down" :class="{'rotate_arrow': isHidden}"></i>
      </div>
      <div class="select_body" v-if="!isHidden">
        <div v-for="item of array" :key="item" class="select_item basic"
             @click="select(item)"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "OptionBlock",
  props: ['title', 'array', 'name'],
  data () {
    return {
      isHidden: true,
      selectCurrent: this.array[0]
    }
  },
  methods: {
    select(item) {
      this.selectCurrent = item;
      this.$emit('selected', {
       [this.name] : this.selectCurrent
      })
    }
  }
}
</script>

<style scoped>
.select_block {
  background-color: #fff;
}
.select_header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;

}
.select {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 144px;
  height: 35px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  transition: border-color .2s;
}
.select:hover {
  border-color: #222222;
}
.select_current {
  font-size: 13px;
  line-height: 24px;
  font-weight: 400;
  color: #6f6e6e;
}
.select_title {
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  color: #2f2f2f;
  text-transform: uppercase;
  margin-bottom: 15px;
}
.rotate_arrow {
  transform: rotate(-180deg);
}
.basic {
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
  color: #6f6e6e;
}
.select_body {
  position: absolute;
  left: -1px;
  right: -1px;
  top: 100%;
  border: 1px solid #ebebeb;
  background-color: #fff;
  z-index: 1;
}
.fa-angle-down {
  margin-right: 10px;
  transition: transform .2s;
  font-size: 14px;
  color: #bcbcbc;
}
.select_item {
  padding-left: 10px;
  font-size: 13px;
  line-height: 24px;
  font-weight: 400;
}
.select_item:hover {
  background-color: #f2f2f2;
}
</style>