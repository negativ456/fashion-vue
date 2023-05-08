<template>
  <div>
    <div @click="isHidden = !isHidden" class="choose_nav" :class="{'colored': !isHidden}">Category
      <i class="fa-solid fa-caret-down" :class="{'rotate_arrow': isHidden}"></i>
    </div>
    <div>
      <div class="choose_nav_block" :class="{'showed': !isHidden}">
        <a href="#" class="choose_nav_op">Accessories</a>
        <a href="#" class="choose_nav_op">Bags</a>
        <a href="#" class="choose_nav_op">Denim</a>
        <a href="#" class="choose_nav_op">Hoodies & Sweatshirts</a>
        <a href="#" class="choose_nav_op">Jackets & Coats</a>
        <a href="#" class="choose_nav_op">Pants</a>
        <a href="#" class="choose_nav_op">Polos</a>
        <a href="#" class="choose_nav_op">Shirts</a>
        <a href="#" class="choose_nav_op">Shoes</a>
        <a href="#" class="choose_nav_op">Shorts</a>
        <a href="#" class="choose_nav_op">Sweaters & Knits</a>
        <a href="#" class="choose_nav_op">T-Shirts</a>
        <a href="#" class="choose_nav_op">Tanks</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "CategoryFilter",
  data: () => {
    return {
      isHidden: true
    }
  }
}
</script>

<style scoped>
.showed {
  max-height: 500px !important;
  margin-bottom: 40px;

}

.colored {
  color: #ef5b70 !important;
}
.rotate_arrow {
  transform: rotate(-180deg);
}
.fa-caret-down {
  transition: transform .2s;
}


.choose_nav {
  width: 243px;
  transition: max-height .2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 37px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #6f6e6e;
  padding-left: 10px;
  list-style-type: none;
  border-left: 5px solid #ef5b70;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 20px;
  user-select: none;
}
.choose_nav_block {
  overflow: hidden;
  padding-left: 15px;
  max-height: 0;
  transition: all .5s;
}

.choose_nav_op {
  display: block;
  text-decoration: none;
  font-size: 14px;
  line-height: 33px;
  font-weight: 400;
  color: #6f6e6e;
}

.choose_nav_op:hover {
  color: #f16d7f;
}
</style>