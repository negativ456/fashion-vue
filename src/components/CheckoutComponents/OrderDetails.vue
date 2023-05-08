<template>
  <div @click="isHidden = !isHidden" class="accordion_item" :class="{'border': isHidden}">01. Shipping Address</div>
  <div>
    <div class="accordion_content" :class="{'showed' :!isHidden}">
      <div class="content_left">
        <p class="accordion_content_main">Check as a guest or register</p>
        <p class="accordion_content_add">Register with us for future convenience</p>
        <div class="flex">
          <label class="input_block pointer">
            <input type="radio" name="register" class="real-radio-btn">
            <span class="custom-radio-btn"></span>
            <span class="input_text">Checkout as guest</span>
          </label>
        </div>
        <div class="flex">
          <label class="input_block">
            <input type="radio" name="register" class="real-radio-btn">
            <span class="custom-radio-btn pointer"></span>
            <span class="input_text pointer">Register</span>
          </label>
        </div>
        <p class="accordion_content_main">Register and save time!</p>
        <p class="accordion_content_add">Register with us for future convenience</p>
        <div class="mini_container">
          <i class="fa-solid fa-angles-right"></i>
          <p class="accordion_content_add modify">Fast and easy checkout</p>
        </div>
        <div class="mini_container">
          <i class="fa-solid fa-angles-right"></i>
          <p class="accordion_content_add modify">Easy access to your order history and status</p>
        </div>
        <a href="#" class="accordion_button">Continue</a>
      </div>
      <div class="content_right">
        <p class="accordion_content_main">Already registered ?</p>
        <p class="accordion_content_add">Please log in below</p>
        <div class="input_block_add">
          <label>
            <span class="label_block">
                <span class="input_text right_text">Email address</span>
            </span>
            <input type="text" class="input_data" required>
          </label>
        </div>
        <div class="input_block_add">
          <label>
            <span class="label_block">
                <span class="input_text right_text">Password</span>
            </span>
            <input type="text" class="input_data" required>
          </label>
        </div>
        <p class="required">* Required Fields</p>
        <div class="button_block">
          <a href="#" class="accordion_button">Log in</a>
          <a href="#" class="forgot">Forgot Password ?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "OrderDetails",
  data: () => {
    return {
      isHidden: true
    }
  }
}
</script>

<style scoped>
.showed {
  max-height: 800px !important;
  padding: 40px 35px 80px;
}

.flex {
  display: flex;
}
.pointer {
  cursor: pointer;
}
.accordion_content {
  overflow: hidden;
  max-height: 1px;
  border-bottom: 1px solid #e8e8e8;
  transition: max-height .5s, padding .5s;
}
.border {

}
.accordion_content_main {
  font-size: 13px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #222222;
  margin-bottom: 15px;
}

.accordion_item {
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
  list-style-type: none;
  user-select: none;
  cursor: pointer;
  padding: 25px 0;
}

.no-padding {
  padding-top: 0;
}

.last_item {
  margin-bottom: 90px;
}

.accordion_content {
  display: flex;
  justify-content: space-between;
}

.accordion_content_add {
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: #b3b2b2;
  margin-bottom: 35px;
}

.input_block_add {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}

.real-radio-btn {
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.input_data {
  padding-left: 20px;
  width: 370px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
}

.required {
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  color: #ff0d0d;
  margin-bottom: 35px;
}

.forgot {
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #222222;
}

.custom-radio-btn {
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border: 2px solid #555555;
  border-radius: 50%;
  vertical-align: text-top;
}

.custom-radio-btn::before {
  content: "";
  /* Рисуем внешний круг */
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #000000;
  border-radius: 50%;
  /* Выравниваем по центру */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 0.2s ease-in;
}

.real-radio-btn:checked + .custom-radio-btn::before {
  transform: translate(-50%, -50%) scale(1);
}

.input_text {
  font-size: 12px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
  padding-left: 15px;
}

.right_text {
  margin-left: 0;
  margin-bottom: 15px;
}

.right_text:after {
  color: red;
  content: " *";
}

.label_block {
  display: flex;
  flex-direction: column;
}

.accordion_button {
  display: inline-block;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #4a4a4a;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  padding: 20px 55px;
  text-decoration: none;
  margin-right: 35px;
}

.input_block {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.mini_container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.mini_container:last-of-type {
  margin-bottom: 48px;
}

.modify {
  margin-bottom: 0;
}

.fa-angles-right {
  font-size: 13px;
  color: #b3b2b2;
  margin-right: 4px;
}
</style>