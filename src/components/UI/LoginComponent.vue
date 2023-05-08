<template>
  <h3 class="modal_header">Sign in</h3>
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
  <a href="#" class="create_account" @click="changeComponent">Don't have an account ? Register here!</a>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name : "LoginComponent",
  inject: ['reload'],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    async loginFunc() {
      document.body.removeAttribute('style');
      await this.login({email: this.email, password: this.password});
      this.reload();
    },
    changeComponent() {
      this.$emit('update:visibleComp', 'RegistrationComponent')
    }
  }
}
</script>

<style scoped>
.fa-xmark {
  position: absolute;
  right: 21px;
  top: 21px;
  cursor: pointer;
}
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
</style>