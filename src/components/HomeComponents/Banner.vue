<template>
  <div class="main_page">
    <div class="container">
      <div class="main_img">
        <div class="main_text"><span class="main_part">the brand <br></span>of luxurious <span class="sec_part">fashion</span>
          <div class="red_panel"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "BannerComponent"
}
</script>

<style scoped>
.main_page {
  background-color: #e8e8e8;
}
.main_page .main_img {
  background-image: url("../../assets/images/main_img.png");
  height: 613px;
  position: relative;
}
.main_page .main_text {
  position: absolute;
  top: 224px;
  border-left: 12px solid #f16d7f;
  width: 495px;
  color: #222222;
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-left: 12px;
}
.main_page .main_part {
  font-size: 60px;
  letter-spacing: 1.5px;
}
.main_page .sec_part {
  color: #f16d7f;
}
</style>