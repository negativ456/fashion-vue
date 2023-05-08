<template>
  <figure class="info_main">
    <div v-for="(n, i) of 3" :key="n" class="pos">
        <div class="info_face" v-if="this.selectedItem === i" :key="i">
          <img :src="require(`../../assets/images/${dataContent[selectedItem].photo}.png`)" alt="face" class="face">
          <div class="info">
            <p class="pers_info">“{{dataContent[selectedItem].quote}}”</p>
            <p class="add_info"><span class="author_highlighted">{{dataContent[selectedItem].author}}</span>
              Dhaka, Bd</p>
          </div>
        </div>

    </div>
    <div class="selector_main">
      <div class="selector" v-for="(n, i) of 3" :key="n" @click="select(i)">
        <div class="active_component" v-if="this.selectedItem === i" ></div>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  name : "QuoteComponent",
  data () {
    return {
      isActive: true,
      selectedItem: 0,
      dataContent: [
        {
          photo: 'face',
          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          author: 'Some author 1'
        },
        {
          photo: 'face',
          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          author: 'Some author 2'
        },
        {
          photo: 'face',
          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          author: 'Some author 3'
        }
  ],
      currentInterval: ''
    }
  },
  methods: {
    select(index) {
      if (this.selectedItem === index) {
        return
      }
      this.selectedItem = index;
      clearInterval(this.currentInterval);
      this.currentInterval = setInterval(() => {
        if (this.selectedItem < 2) this.selectedItem += 1;
        else this.selectedItem = 0;
      }, 5000)
    },
    startTime() {
      this.currentInterval = setInterval(() => {
        if (this.selectedItem < 2) this.selectedItem += 1;
        else this.selectedItem = 0;
      }, 5000)
    }
  },
  mounted() {
    this.startTime();
  }

}
</script>

<style scoped>
@keyframes filling {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.pos {

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.active_component {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #f16d7f;
  width: 100%;
  height: 100%;
  animation: filling 5s linear;
}


.info_main {
  position: absolute;
  left: 0;
  top: 110px;
}
.info_face {
  display: flex;
}
.face {
  width: 83px;
  height: 83px;
  margin-right: 30px;
}
.pers_info {
  width: 386px;
  color: #222224;
  font-size: 16px;
  font-style: italic;
  line-height: 26px;
  margin-bottom: 20px;
}
.author_highlighted {
  color: #f16d7f;
  display: block;
  font-size: 16px;
  font-weight: 700;
}
.add_info {
  margin-bottom: 40px;
}
.selector {
  margin-right: 13px;
  width: 38px;
  height: 4px;
  background-color: #d6d6d6;
  cursor: pointer;
  position: relative;
}
.selector:last-child {
  margin-right: 0;
}
.selector_main {
  display: flex;
  margin-left: 113px;
}
</style>