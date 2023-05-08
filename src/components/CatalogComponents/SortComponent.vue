<template>
  <div class="select_block">
    <div class="select_title">{{title}}</div>
    <div class="select" :class="{first: first}" @click="isHidden = !isHidden">
      <div class="select_header" >
        <span class="select_current basic">{{ selectCurrent }}</span>
        <i class="fa-solid fa-caret-down" :class="{'rotate_arrow': isHidden}"></i>
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
  name : "SortComponent",
  props: ['title', 'array', 'name', 'first'],
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
        [this.name]: this.selectCurrent
      })
    }
  }
}
</script>

<style scoped>
.select_current {
  margin-right: 18px;
}
.rotate_arrow {
  transform: rotate(-180deg);
}

.fa-caret-down {
  color: #6f6e6e;
  transition: transform .2s;
}
.select_item {
  padding-left: 8px;
}
.select_block {
  border: 1px solid #ebebeb;
  background-color: #fff;
  display: flex;
}
.select {
  position: relative;
  display: flex;
  align-items: center;
  width: 63px;
  justify-content: center;
  cursor: pointer;
}
.first {
  width: 86px;
}

.select_block:first-child {
  margin-right: 10px;
}
.select_header {
  display: flex;
  align-items: center;
}
.select_title {
  padding: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #6f6e6e;
  border-right: 1px solid #ebebeb;
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
.select_item:hover {
  background-color: #f2f2f2;
}
.basic {
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
  color: #6f6e6e;
}
</style>