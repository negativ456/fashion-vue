<template>
  <div>
    <ul class="options_list" >
      <li class="option" v-for="option in options" :key="option" @click="selectOption(option)">
        <p class="option_link" :class="{'active': selected === option}" >{{option}}</p>
      </li>
      <li class="option">
        <div @click="logoutFunc" class="option_link">Logout
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name : "AccountOptions",
  inject: ['reload'],
  data: () => {
    return {
      options: ['My profile', 'My orders'],
      selected: 'My profile'
    }
  },
  methods: {
    selectOption(option) {
      this.selected = option;
      this.$emit('selected', this.selected);
      // const options = document.querySelectorAll(".option_link")
      // let currentEl = event.target;
      // if (currentEl.classList.contains('option_link')) {
      //   options.forEach(el => el.classList.remove('active'));
      //   currentEl.classList.toggle('active');
      // }
    },
    async logoutFunc() {
      await this.logout();
      await this.$router.push('/');
      this.reload();
    },

    ...mapActions(['logout'])
  },
  mounted() {
    this.$emit('selected', this.selected);
  }

}
</script>

<style scoped lang="scss">
.options_list {
  list-style-type: none;
  border: 1px solid #eaeaea;
  width: 270px;
  border-radius: 4px;

}

.option_link:last-child {
  justify-content: space-between;
  align-items: center;
}
.option:not(:last-child) {
  box-shadow: inset 0 -1px 0 #eaeaea;
  padding-bottom: 1px;
}
.option {
  cursor: pointer;
}
.option:hover {
  background-color: #f5f5f5;
}
.option_link {
  display: flex;
  position: relative;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #222222;

}
.active:before {
  content: "";
  position: absolute;
  left: -1px;
  top: -1px;
  bottom: -1px;
  width: 2px;
  background: #333;
}
</style>