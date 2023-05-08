<template>
  <div class="slider">
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :centered-slides="true"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide class="swiper_slide" v-for="n of 3" :key="n">
        <img src="../../assets/singlePageImages/photo.png" class="image" alt="woman">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
  name : "SwiperComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSlideChange,
      modules: [Navigation, A11y],
    };
  },
}
</script>

<style scoped>
.slider {
  background-color: #f7f7f7;
}
.swiper_slide {
  display: flex;
  justify-content: center;
}
.swiper {
  z-index: 0;
}
.image {
  user-select: none;
}


</style>