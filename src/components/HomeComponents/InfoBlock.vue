<template>
  <section>
    <div class="info_block">
      <img src="../../assets/images/background.png" alt="background" class="background">
      <div class="container stage">
        <div class="info_left">
          <QuoteComponent></QuoteComponent>
        </div>
        <div class="info_right">
          <div class="subscribe_block">
            <div class="subscribe_info"><span class="subscribe_highlighted">Subscribe</span><br>
              FOR OUR NEWLETTER AND PROMOTION</div>
            <div class="submit_block">
              <input type="text" class="email" placeholder="Enter your email" v-model="email">
              <div class="subscribe_button" @click="sendEmail(email)">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import QuoteComponent from "@/components/HomeComponents/QuoteComponent";
import {mapActions} from "vuex";
export default {
  name : "InfoBlock",
  data () {
    return {
      isActive: true,
      selectedItem: 0,
      email: ''
    }
  },
  methods: {
    select(index) {
      this.selectedItem = index;
    },
    ...mapActions(['sendEmail'])
  },
  components: {
    QuoteComponent
  }
}
</script>

<style scoped>
.info_block {
  position: relative;
  margin-bottom: 110px;
}
.active {
  background-color: #f16d7f !important;
}
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  object-fit: cover;
  object-position: bottom;
  user-select: none;
}
.info_block .stage {
  display: flex;
  position: relative;
  height: 438px;
}
.info_block .info_left {
  width: 50%;
  border-right: 1px solid #fff;
}
.info_block .info_left .info_main {
  position: absolute;
  left: 0;
  top: 110px;
}
.info_block .info_left .info_face {
  display: flex;
}
.info_block .info_left .face {
  width: 83px;
  height: 83px;
  margin-right: 30px;
}
.info_block .info_left .pers_info {
  width: 386px;
  color: #222224;
  font-size: 16px;
  font-style: italic;
  line-height: 26px;
  margin-bottom: 20px;
}
.info_block .info_left .author_highlighted {
  color: #f16d7f;
  font-size: 16px;
  font-weight: 700;
}
.info_block .info_left .add_info {
  width: 82px;
  margin-bottom: 40px;
}
.info_block .info_left .selector_main {
  display: flex;
}
.info_block .info_left .selector {
  margin-right: 13px;
  width: 38px;
  height: 4px;
  background-color: #d6d6d6;
  cursor: pointer;
}
.info_block .info_left .selector:last-child {
  margin-right: 0;
}
.info_block .info_right {
  width: 50%;
}
.info_block .info_right .subscribe_block {
  position: absolute;
  right: 90px;
  top: 150px;
  width: 386px;
}
.info_block .info_right .subscribe_info {
  color: #222224;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  width: 277px;
  text-align: center;
  margin: 0 auto 35px;
}
.info_block .info_right .subscribe_highlighted {
  font-size: 24px;
}
.info_block .info_right .submit_block {
  display: flex;
}
.info_block .info_right .email {
  padding-left: 28px;
  border: 0;
  width: 254px;
  height: 46px;
  border-radius: 23px 0 0 23px;
  background-color: #e1e1e1;
}
.info_block .info_right .subscribe_button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #ffffff;
  border: 0;
  width: 104px;
  height: 46px;
  border-radius: 0 23px 23px 0;
  background-color: #f16d7f;
  user-select: none;
  transition: background-color, color 0.2s;
}
.info_block .info_right .subscribe_button:hover {
  color: #f16d7f;
  background-color: #fff;
  border: 1px solid #f16d7f;
}
</style>