<template>
  <div class="slider">
    <div class="container slide">
      <img src="../../assets/singlePageImages/photo.png" alt="woman">
    </div>
    <div class="arrows">
      <i class="fa-solid fa-angle-left"></i>
      <i class="fa-solid fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name : "SliderComponent"
}
</script>

<style scoped>
.slider {
  background-color: #f7f7f7;
  border: 1px solid #eaeaea;
  position: relative;
}
.slider .slide {
  height: 777px;
  display: flex;
  justify-content: center;
}
.slider .arrows {
  display: flex;
}
.slider .fa-solid {
  position: absolute;
  top: 50%;
  color: #ffffff;
  padding: 18px;
  background-color: rgba(42, 42, 42, 0.14);
  transition: all 0.2s;
}
.slider .fa-solid:hover {
  background-color: #ef5b70;
  color: #fff;
}
.slider .fa-angle-left {
  left: 0;
}
.slider .fa-angle-right {
  right: 0;
}
</style>