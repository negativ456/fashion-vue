<template>
  <footer class="footer">
    <div class="container bottom">
      <div class="logo_part">
        <a href="#" class="logo">
          <img src="../../assets/images/logo.svg" alt="logo" class="logo_img">
          <div class="logo_text">bran<span class="letter_D">d</span></div>
        </a>
        <p class="footer_text">Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships. </p>
        <p class="footer_text">Efficiently plagiarize 24/365 action items and focused infomediaries.
          Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
      </div>
      <div class="company_part">
        <div class="info_part">
          <h3 class="part_header">Company</h3>
          <a href="#" class="info_link">Home </a>
          <a href="#" class="info_link">Shop</a>
          <a href="#" class="info_link">About</a>
          <a href="#" class="info_link">How It Works</a>
          <a href="#" class="info_link">Contact</a>
        </div>
      </div>
      <div class="info_part">

        <div class="info_part">
          <h3 class="part_header">Information</h3>
          <a href="#" class="info_link">Home </a>
          <a href="#" class="info_link">Shop</a>
          <a href="#" class="info_link">About</a>
          <a href="#" class="info_link">How It Works</a>
          <a href="#" class="info_link">Contact</a>
        </div>

      </div>
      <div class="shop_part">
        <div class="info_part">
          <h3 class="part_header">Shop category</h3>
          <a href="#" class="info_link">Home</a>
          <a href="#" class="info_link">Shop</a>
          <a href="#" class="info_link">About</a>
          <a href="#" class="info_link">How It Works</a>
          <a href="#" class="info_link">Contact</a>
        </div>

      </div>
    </div>
    <div class="footer_bottom">
      <div class="container rights">
        <p class="rights_text">© 2017  Brand  All Rights Reserved.</p>
        <div class="icons_box">
          <a href="#" class="social_link">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" class="social_link">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#" class="social_link">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" class="social_link">
            <i class="fa-brands fa-pinterest-p"></i>
          </a>
          <a href="#" class="social_link">
            <i class="fa-brands fa-google-plus-g"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name : "FooterComponent"
}
</script>

<style scoped>
.footer .bottom {
  display: flex;
  justify-content: space-between;
  padding-bottom: 90px;
}
.footer .part_header {
  text-transform: uppercase;
  color: #f16d7f;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 45px;
}
.footer .info_link {
  display: block;
  text-decoration: none;
  color: #898989;
  font-size: 16px;
  font-weight: 400;
  line-height: 42px;
}
.footer .info_link:hover {
  color: #f16d7f;
}
.footer .logo_part .letter_D {
  color: #f16d7f;
  font-weight: 400;
}
.footer .logo_part .logo {
  display: flex;
  text-decoration: none;
  align-items: center;
  margin-bottom: 30px;
}
.footer .logo_part .logo_img {
  margin-right: 13px;
}
.footer .logo_part .logo_text {
  color: #222222;
  font-size: 27px;
  line-height: 32px;
  font-weight: 300;
  text-transform: uppercase;
  margin-right: 37px;
}
.footer .logo_part .footer_text {
  color: #898989;
  font-size: 14px;
  font-weight: 300;
  width: 427px;
  margin-bottom: 30px;
}
.footer .logo_part .footer_text:last-child {
  margin-bottom: 0;
}
.footer .icons_box {
  display: flex;
}
.footer .footer_bottom {
  background-color: #e6e6e6;
}
.footer .footer_bottom .rights {
  height: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer .footer_bottom .rights_text {
  color: #7a7a7a;
  font-size: 16px;
  font-weight: 400;
}
.footer .footer_bottom .social_link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  text-decoration: none;
  margin-right: 8px;
  background-color: #fff;
}
.footer .footer_bottom .fa-brands {
  background-color: #fff;
  color: #b2b2b2;
  transition: color 0.2s;
}
.footer .footer_bottom .social_link:hover .fa-brands {
  color: #f16d7f;
}
.footer .footer_bottom .social_link:last-child {
  margin-right: 0;
}
</style>