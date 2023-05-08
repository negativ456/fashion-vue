<template>
  <div v-if="!back" class="modal-container">
    <div class="modal-background">
      <div class="modal">
        <h3 class="modal_header">Sign in</h3>
        <i class="fa-solid fa-xmark" @click="$emit('close')"></i>
        <form @submit.prevent="loginFunc">
          <div class="input_block_add">
            <label>
            <span class="label_block">
                <span class="input_text right_text">Email address</span>
            </span>
              <input type="text" class="input_data" v-model="email" required>
            </label>
          </div>
          <div class="input_block_add">
            <label>
            <span class="label_block">
                <span class="input_text right_text">Password</span>
            </span>
              <input type="password" class="input_data" v-model="password" required>
            </label>
          </div>
          <div class="additional_block">
            <label class="remember">
              <input type="checkbox">
              <span class="remember_text">Remember me</span>
            </label>
            <div class="forget">
              <a href="#" class="forget_text">Forgot password ?</a>
            </div>
          </div>
          <button class="register_block" type="submit">Login</button>
        </form>
        <a href="#" class="create_account" @click="back = true">Don't have an account ? Register here!</a>
      </div>
    </div>
  </div>
  <RegistrationComponent v-else @backTo="switchComp" :isBack="back"></RegistrationComponent>
</template>

<script>
import {mapActions} from "vuex";
import RegistrationComponent from "@/components/HomeComponents/ModalWindows/Registration-component";
export default {
  name : "ModalWindow",
  inject: ['reload'],
  data: () => {
    return {
      back: false,
      email: '',
      password: ''
    }
  },
  methods: {
    async loginFunc() {
      document.body.removeAttribute('style');
      await this.login({email: this.email, password: this.password});
      this.reload();
    },
    ...mapActions(['registration', 'login']),
    switchComp(data) {
      this.back = data;
    }

  },
  components: {
    RegistrationComponent
  }
}
</script>

<style scoped lang="scss">
.create_account {
  font-size: 14px;
  color: #222222;
  text-decoration: none;
  font-weight: 400;
}
.create_account:hover {
  text-decoration: underline;
}
.forget_text {
  font-size: 14px;
  text-decoration: none;
  color: #222222;
  font-weight: 400;

}
.forget_text:hover {
  text-decoration: underline;
}
.remember_text {
  font-size: 14px;
  margin-left: 10px;
  font-weight: 400;
}
.remember {
  display: flex;
  align-items: center;
}
.modal_header {
  margin-bottom: 70px;
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
}
.register_block {
  background-color: #fff;
  border: 1px solid #f16d7f;
  color: #f16d7f;
  padding: 15px 0;
  width: 100%;
  font-weight: 400;
  transition: background-color .2s, color .2s;
  margin-bottom: 20px;
  cursor: pointer;
}
.register_block:hover {
  color: #fff;
  background-color: #f16d7f;

}
.additional_block {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  color: #222222;
}
input:focus {
  border-color: black;
}
.input_block_add {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}
.right_text {
  margin-left: 0;
  margin-bottom: 15px;
}
.label_block {
   display: flex;
   align-items: flex-start;
}
.input_data {
  padding-left: 20px;
  width: 370px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
}
.right_text:after {
  color: red;
  content: " *";
}
.input_text {
  font-size: 12px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
}
.modal-container {
  position: fixed;
  display: table;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 10;
  &.two {
    transform:scale(1);
    .modal-background {
      background:rgba(0,0,0,.0);
      animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      .modal {
        opacity:0;
        animation: scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
    + .content {
      animation: scaleBack .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    }
    &.out {
      animation: quickScaleDown 0s .5s linear forwards;
      .modal {
        animation: scaleDown .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
      .modal-background {
        animation: fadeOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
      + .content {
        animation: scaleForward .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
  }
  &.modal-active {
    overflow: hidden;
  }

}
.fa-xmark {
  position: absolute;
  right: 21px;
  top: 21px;
  cursor: pointer;
}
.modal-background {
  display:table-cell;
  background:rgba(0,0,0,.8);
  text-align:center;
  vertical-align:middle;
  .modal {
    background: #faf9f8;
    padding:50px;
    display:inline-block;
    border-radius:3px;
    font-weight:300;
    position:relative;
    h2 {
      font-size:25px;
      line-height:25px;
      margin-bottom:15px;
    }
    p {
      font-size:18px;
      line-height:22px;
    }
    .modal-svg {
      position:absolute;
      top:0;
      left:0;
      height:100%;
      width:100%;
      border-radius:3px;
      rect {
        stroke: #fff;
        stroke-width: 2px;
        stroke-dasharray: 778;
        stroke-dashoffset: 778;
      }
    }
  }
}
@keyframes fadeIn {
  0% {
    background:rgba(0,0,0,.0);
  }
  100% {
    background:rgba(0,0,0,.7);
  }
}
@keyframes scaleUp {
  0% {
    transform:scale(.8) translateY(1000px);
    opacity:0;
  }
  100% {
    transform:scale(1) translateY(0px);
    opacity:1;
  }
}
@keyframes scaleBack {
  0% {
    transform:scale(1);
  }
  100% {
    transform:scale(.85);
  }
}
@keyframes quickScaleDown {
  0% {
    transform:scale(1);
  }
  99.9% {
    transform:scale(1);
  }
  100% {
    transform:scale(0);
  }
}
@keyframes fadeOut {
  0% {
    background:rgba(0,0,0,.7);
  }
  100% {
    background:rgba(0,0,0,.0);
  }
}
@keyframes scaleDown {
  0% {
    transform:scale(1) translateY(0px);
    opacity:1;
  }
  100% {
    transform:scale(.8) translateY(1000px);
    opacity:0;
  }
}
@keyframes scaleForward {
  0% {
    transform:scale(.85);
  }
  100% {
    transform:scale(1);
  }
}
</style>