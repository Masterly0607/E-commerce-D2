<template>
  <section class="bg-gray-200">
    <!-- Swiper Slider -->
    <div>
      <swiper
        :key="images.length"
        :modules="[Navigation, EffectFade, Autoplay,Pagination]"
        effect="fade"
        :fadeEffect="{ crossFade: true }"
        :slides-per-view="1"
        :space-between="0"
        :loop="false"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        class="custom-swiper"
      >
        <!-- Dynamically Render Slides -->
        <swiper-slide v-for="(image, index) in images" :key="'slide-' + index">
          <img :src="image" :alt="'Image ' + (index + 1)" class="swiper-image"  />
        </swiper-slide>
      </swiper>
    </div>

    <!-- Updated New Release Section -->
    <div class="p-2 mt-36">
      <div class="text-center underline mb-20 font-medium text-5xl">
        New Release
      </div>
      <swiper
              :modules="[Navigation, EffectFade,Mousewheel,Scrollbar]"
        :mousewheel="true"
        :slides-per-view="4"
        :space-between="100"
        :loop="false"
         :watchOverflow="true"
        :scrollbar="{ draggable: true }"
     
        navigation
       
        class="custom-new-release-swiper"
      >
        <swiper-slide v-for="(newRelease, index) in newReleases" :key="index">
          <div class="flex flex-col items-center justify-between bg-white shadow-lg  rounded h-[800px]">
            <img
              :src="newRelease.image"
              :alt="newRelease.title"
              class="  object-cover mb-4 w-full h-[70%]"
            />
            <h3 class="text-3xl font-bold text-center">{{ newRelease.title }}</h3>
            <p class="text-sm text-center text-gray-500 mt-2">
              {{ newRelease.price }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Blind Boxes and Figurines -->
    <div class="mt-7 p-2">
      <div class="flex gap-3">
        <div class="relative col h-64">
          <img
            src="/public/images/1.png"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black bg-opacity-30"></div>
          <p
            class="text-white text-xl font-bold absolute inset-0 flex items-center justify-center underline cursor-pointer"
          >
            Blind Boxes
          </p>
        </div>
        <div class="relative col h-64">
          <img
            src="/public/images/2.png"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black bg-opacity-30"></div>
          <p
            class="text-white text-xl font-bold absolute inset-0 flex items-center justify-center underline cursor-pointer"
          >
            Figurines
          </p>
        </div>
      </div>
    </div>

    <!-- Our Characters -->
    <div class="mt-7">
      <div>
        <div class="text-center">
          <div class="text-xl underline mb-7 font-medium">Our Characters</div>
          <div class="mb-7">
            Discover the collections by their characters
          </div>
        </div>

        <div class="flex h-48">
          <div class="col">
            <img
              src="/public/images/6.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="col">
            <img
              src="/public/images/7.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="col">
            <img
              src="/public/images/8.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="text-center mt-6">
          <button class="bg-primary text-white font-bold py-2 px-4 rounded">
            <router-link :to="{ name: 'product-page' }"> Discover more </router-link>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script >


import { Swiper, SwiperSlide } from "swiper/vue"; // Import Swiper components
import { Navigation, Pagination, EffectFade, Autoplay, Mousewheel,  Scrollbar} from "swiper/modules"; // Import Swiper modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    // Array of images for the main slider
    const images = [
      "/public/images/slide img/1.webp",
      "/public/images/slide img/2.webp",
      "/public/images/slide img/3.webp",
      "/public/images/slide img/4.webp",
      "/public/images/slide img/5.webp",
    ];

    // New release items for the New Release swiper
    const newReleases = [
      {
        image: "/public/images/1.png",
        title: "Blind Box Set",
        price: "KHR 48,693.68",
      },
      {
        image: "/public/images/2.png",
        title: "Figurines Collection",
        price: "KHR 60,000.00",
      },
      {
        image: "/public/images/3.png",
        title: "Mega Space Molly",
        price: "KHR 79,000.00",
      },
      {
        image: "/public/images/4.png",
        title: "Royal Molly Figurines",
        price: "KHR 90,000.00",
      },
      {
        image: "/public/images/5.png",
        title: "Special Edition Molly",
        price: "KHR 85,000.00",
      },
      {
        image: "/public/images/1.png",
        title: "Blind Box Set",
        price: "KHR 48,693.68",
      },
      {
        image: "/public/images/2.png",
        title: "Figurines Collection",
        price: "KHR 60,000.00",
      },
      {
        image: "/public/images/3.png",
        title: "Mega Space Molly",
        price: "KHR 79,000.00",
      },
      {
        image: "/public/images/4.png",
        title: "Royal Molly Figurines",
        price: "KHR 90,000.00",
      },
      {
        image: "/public/images/5.png",
        title: "Special Edition Molly",
        price: "KHR 85,000.00",
      },
    ];

    return {
      images,
      newReleases,
      Navigation,
      Pagination,
      EffectFade,
      Autoplay,
      Mousewheel,
      Scrollbar
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
  margin: 0 auto;
}

.swiper-image {
  width: 100%; /* Fill the slide horizontally */
  height: 100%; /* Fill the slide vertically */
  object-fit: cover; /* Ensure the image scales properly without distortion */
  display: block;
}
/* New Release Swiper */
.custom-new-release-swiper {
  width: 100%;
  padding: 20px 0;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;

}

/* Custom Navigation Buttons */
.swiper-button-prev,
.swiper-button-next {
  color: gray;
   
  background: white;
  border-radius: 50%;
  padding: 40px;
  border: 2px solid black;
 
 

}





/* Custom Pagination Dots */
.swiper-pagination-bullet {
  background-color: gray;
  width: 12px;
  height: 12px;
  opacity: 0.6;
  margin: 0 5px;
}

.swiper-pagination-bullet-active {
  background-color: #f26321;
  transform: scale(1.2);
  opacity: 1;
}


</style>
