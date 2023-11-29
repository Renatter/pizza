<template>
  <div class="page">
    <h1 class="text-[30px] font-medium">Новинки</h1>
    <swiper
      :slides-per-view="4"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="flex" v-for="item in 6"
        ><NewProduct></NewProduct>
      </swiper-slide>

      ...
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import NewProduct from "../components/NewProduct.vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    NewProduct,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
<style>
.page {
  padding-top: 70px;
}
</style>
