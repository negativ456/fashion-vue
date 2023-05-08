<template>
  <div class="container">
    <header class="header">
      <div class="left_part">
        <router-link to="/" class="logo">
          <img src="../../assets/images/logo.svg" alt="logo" class="logo_img">
          <div class="logo_text" ref="logo">bran<span class="letter_D">d</span></div>
        </router-link>
        <details>
          <summary class="browse">Browse
            <i class="fa-solid fa-caret-down fa-caret-down-browse"></i>
          </summary>
        </details>
        <form action="">
          <input type="text" placeholder="Search for item..." class="search">
          <button class="button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div class="right_part">
        <CartComponent></CartComponent>
        <div class="account_details"  v-if="getAuth">
          <router-link to="/account" class="account_block">
            <p class="my_account">My Account</p>
            <i class="fa-solid fa-caret-down"></i>
          </router-link>
          <ShortMyAccount class="main_block"/>
        </div>
        <div class="account_details" @click="open" v-else-if="!getAuth">
          <div class="account_block">
            <p class="my_account">Sign Up</p>
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
        <ModalWindow v-model:show="isVisible">
          <component :is="currentComponent" v-model:visibleComp="visibleComp"/>
        </ModalWindow>
      </div>
    </header>
  </div>
  <hr class="line">
  <nav>
    <div class="container">
      <ul class="menu">
        <li class="menu_list">
          <router-link to="/" class="menu_link">HOME</router-link>
        </li>
        <li class="menu_list"><a href="#" class="menu_link">MEN</a>
          <div class="mega_box">
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
          </div>
        </li>
        <li class="menu_list"><a href="#" class="menu_link">WOMEN</a>
          <div class="mega_box">
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
          </div>
        </li>
        <li class="menu_list"><a href="#" class="menu_link">KIDS</a>
          <div class="mega_box">
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
          </div>
        </li>
        <li class="menu_list"><a href="#" class="menu_link">ACCESSORIES</a>
          <div class="mega_box">
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
          </div>
        </li>
        <li class="menu_list last"><a href="#" class="menu_link">FEATURED</a>
          <div class="mega_box">
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
          </div>
        </li>
        <li class="menu_list last"><a href="#" class="menu_link">HOT DEALS</a>
          <div class="mega_box">
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
            <div class="mega_item">
              <h3 class="mega_header">Man</h3>
              <a href="#" class="mega_link">Dresses</a>
              <a href="#" class="mega_link">Tops</a>
              <a href="#" class="mega_link">Sweaters/Knits</a>
              <a href="#" class="mega_link">Jackets/Coats</a>
              <a href="#" class="mega_link">Blazers</a>
              <a href="#" class="mega_link">Denim</a>
              <a href="#" class="mega_link">Leggings/Pants</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import CartComponent from "@/components/HomeComponents/Cart";
import ShortMyAccount from "@/components/HomeComponents/ShortMyAccount";
import LoginComponent from "@/components/UI/LoginComponent";
import RegistrationComponent from "@/components/UI/RegistrationComponent";
import {mapGetters, mapActions} from "vuex";

export default {
  name : "HeaderComponent" ,
  components : {CartComponent, ShortMyAccount, LoginComponent, RegistrationComponent},
  data: () => {
    return {
      isVisible: false,
      visibleComp: 'LoginComponent'
    }
  },
  methods: {
    open() {
      document.body.style.overflow = 'hidden';
      this.isVisible = true;

    },
    ...mapActions(['checkAuth'])
  },
  computed: {
    ...mapGetters(['getAuth', 'getUser']),
    currentComponent: function () {
      return `${this.visibleComp}`;
    },
  },
  mounted() {
    if (localStorage.getItem('token')) {
      this.checkAuth();
    }
  }
}
</script>

<style scoped>
.account_block {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  text-decoration: none;
  color: #fff;
}
.account_details:hover .main_block {
  opacity: 1;
  visibility: visible;
}
.fa-user {
  margin-left: 10px;
}

.container {
  width: 1140px;
  margin: 0 auto;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
}
.header .left_part {
  display: flex;
  align-items: center;
}
.header .right_part {
  display: flex;
  align-items: center;
  position: relative;
}
.account_details {
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 26px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  background-color: #f16d7f;
  cursor: pointer;
}

.header .fa-caret-down {
  margin-left: 10px;
}
.header .logo_text {
  color: #222222;
  font-size: 27px;
  line-height: 32px;
  font-weight: 300;
  text-transform: uppercase;
  margin-right: 37px;
}
.header .logo {
  display: flex;
  text-decoration: none;
  align-items: center;
}
.header .logo_img {
  margin-right: 13px;
}
.header .letter_D {
  color: #f16d7f;
  font-weight: 900;
}
.header .browse {
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 38px;
  border-radius: 3px 0 0 3px;
  border: 1px solid #e6e6e6;
  border-right: 0;
  background-color: #cdcdcc;
  background-image: linear-gradient(to bottom, #f9f9f9 0%, #f5f5f5 100%);
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
}
.header .fa-caret-down-browse {
  font-size: 14px;
  color: #838383;
}
.header .search {
  position: relative;
  width: 280px;
  height: 38px;
  border: 1px solid #e6e6e6;
  border-right: 0;
  font-family: Lato;
  font-size: 14px;
  font-weight: 300;
  padding: 0 16px;
}
.header .search::placeholder {
  font-family: Lato;
  font-size: 14px;
  font-weight: 300;
}
.header .button {
  position: absolute;
  width: 36px;
  height: 40px;
  border-radius: 0 3px 3px 0;
  border: 1px solid #e6e6e6;
  background-color: #fff;
}
.header .fa-magnifying-glass {
  font-size: 14px;
  color: #a4a4a4;
}
.line {
  border: 1px solid #ececec;
}
.menu {
  display: flex;
  justify-content: center;
  list-style-type: none;
}
.menu_list {
  padding: 20px 0;
  position: relative;
  z-index: 1;
}
.menu_link {
  padding: 20px 25px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: #222222;
}
.menu .menu_list:hover .mega_box {
  opacity: 1;
  pointer-events: all;
}
.menu .mega_box {
  display: flex;
  opacity: 0;
  pointer-events: none;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #e8e8e8;
  position: absolute;
  top: 47px;
  transition: opacity 0.2s ease-in-out;
}
.menu .mega_item {
  margin-right: 45px;
}
.menu .mega_item:last-child {
  margin-right: 0;
}
.menu .mega_header {
  color: #232323;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 8px;
  margin-bottom: 10px;
  width: 235px;
}
.menu .mega_link {
  display: block;
  text-decoration: none;
  color: #646464;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
}
.menu .mega_link:hover {
  color: #f16d7f;
}
.menu .mega_box:before {
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  background-color: #fff;
  position: absolute;
  top: -8px;
  left: 35px;
  transform: rotate(45deg);
  border-top: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;
}
.menu .last .mega_box {
  right: 0;
  left: auto;
}
.menu .last .mega_box:before {
  right: 55px;
  left: auto;
}
</style>