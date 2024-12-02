<template>
  <section class="bg-gray-200">
    <div class="f-container-1200 ">
      <!-- Swiper Slider -->
      <div>
        <swiper
          :key="images.length"
          :modules="[Navigation, Pagination, EffectFade, Autoplay]"
          effect="fade"
          :fadeEffect="{ crossFade: true }"
          :slides-per-view="1"
          :space-between="0"
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          navigation
          :pagination="{ clickable: true }"
          class="custom-swiper"
        >
          <!-- Dynamically Render Slides -->
          <swiper-slide v-for="(image, index) in images" :key="'slide-' + index">
            <img :src="image" :alt="'Image ' + (index + 1)" class="swiper-image" />
          </swiper-slide>
        </swiper>
      </div>
      <!-- Blind Boxes and Figurines -->
      <div class="mt-7">
        <div class="flex gap-3 p-2">
          <div class="relative col h-64 ">
            <img src="/public/images/16.jpeg" alt="" class="w-full h-full object-cover ">
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
            <p class="text-white text-xl font-bold absolute inset-0 flex items-center justify-center underline cursor-pointer">Blind Boxes</p>
        
          </div>
          <div class="relative col h-64">
            <img src="/public/images/15.jpg" alt="" class="w-full h-full object-cover  ">
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
            <p class="text-white text-xl font-bold absolute inset-0 flex items-center justify-center underline cursor-pointer">Figurines</p>
        
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"; // Import Swiper components
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules"; // Import Swiper modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Array of images for the slider
    const images = [
      "/images/11.jpg",
      "/images/12.jpg",
      "/images/13.jpg",
      "/images/14.jpg",
    ];

    return {
      images,
      Navigation,
      Pagination,
      EffectFade,
      Autoplay,
    };
  },
};
</script>

<style>
.custom-swiper {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
}

.swiper-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.swiper-slide {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: 1;
}

.swiper-slide.swiper-slide-active {
  opacity: 1;
  z-index: 10;
}
</style>
