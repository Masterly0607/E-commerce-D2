<template>
  <section class="bg-gray-200 mt-40">
    <div >
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
          <swiper-slide v-for="(image, index) in images" :key="'slide-' + index" >
            
            <img :src="image" :alt="'Image ' + (index + 1)" class="swiper-image" />
          </swiper-slide>
        </swiper>
      </div>
      <!-- Blind Boxes and Figurines -->
      <div class="mt-7 p-2">
        <div class="flex gap-3 ">
          <div class="relative col h-64 ">
            <img src="/public/images/1.png" alt="" class="w-full h-full object-cover ">
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
            <p class="text-white text-xl font-bold absolute inset-0 flex items-center justify-center underline cursor-pointer">Blind Boxes</p>
          </div>
          <div class="relative col h-64">
            <img src="/public/images/2.png" alt="" class="w-full h-full object-cover  ">
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
            <p class="text-white text-xl font-bold absolute inset-0 flex items-center justify-center underline cursor-pointer">Figurines</p>
          </div>
        </div>
      </div>

      <!-- New release -->
     <div class="p-2 mt-7">
      <div class="text-center underline mb-8 font-medium text-xl">New Release</div>
      <div class="flex gap-3 h-72  ">
        <div class="col bg-white flex items-center ">
    <img src="/public/images/3.png" alt="" class="w-full h-full object-cover ">
        </div>
        <div class="col flex flex-col gap-2">
       
       <div class="col h-[45%] bg-orange-500">
        <img src="/public/images/4.png" alt="" class="w-full h-full object-cover ">
       </div>
       <div class="col bg-pink-300 h-[45%]">
        <img src="/public/images/5.png" alt="" class="w-full h-full object-cover">
       </div>
        </div>
      </div>
     </div>

     <!-- Our characters -->
      <div class="mt-7">
        <div>
          <div class="text-center">
            <div class="text-xl underline mb-7 font-medium">Our Characters</div>
          <div class="mb-7">Discover the collections by their characters</div>
          </div>
          
          <div class="flex h-48">
            <div class="col">  <img src="/public/images/6.png" alt="" class="w-full h-full object-cover "></div>
           <div class="col">  <img src="/public/images/7.png" alt="" class="w-full h-full object-cover "></div>
           <div class="col">  <img src="/public/images/8.png" alt="" class="w-full h-full object-cover "></div>
          </div>
         
          <div class="text-center mt-6">
            
            <button class="bg-primary text-white font-bold py-2 px-4 rounded">
              <router-link  :to="{name:'product-page'}">  Discover more</router-link>

</button>
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
      "/public/images/slide img/1.webp",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
    ];
    // Array of images for the trending slider
    const trendingImages = [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
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
/* Swiper Container */
.custom-swiper {
  width: 100%;
  height: 800px;
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5; 
}

/* Swiper Images */
.swiper-image {
  width: 100%;
  height: 100%;
   object-fit: cover;
  display: block;

}

/* Swiper Slide Transitions */
.swiper-slide {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: 1;

}

.swiper-slide.swiper-slide-active {
  opacity: 1;
  z-index: 10;
}

/* Custom Navigation Arrows */
.custom-swiper .swiper-button-prev,
.custom-swiper .swiper-button-next {
  color: gray;
  font-size: 20px;
}

.custom-swiper .swiper-button-prev:hover,
.custom-swiper .swiper-button-next:hover {
  color: #F26321; /* Darker shade for hover */
}

/* Custom Pagination Dots */
.custom-swiper .swiper-pagination-bullet {
  background-color: gray; /* Use your primary color */
  width: 12px;
  height: 12px;
  opacity: 0.6;
  margin: 0 5px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.custom-swiper .swiper-pagination-bullet-active {
  background-color: #F26321; /* Use darker shade for active */
  transform: scale(1.2); /* Enlarge active dot */
  opacity: 1;
}

</style>
