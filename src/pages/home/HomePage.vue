<template>
  <section class="bg-gray-200">

    <!-- Open Slider -->
    <div>
      <swiper
        :key="images.length"
        :modules="[Navigation, EffectFade, Autoplay, Pagination]"
        effect="fade"
        :fadeEffect="{ crossFade: true }"
        :slides-per-view="1"
        :space-between="0"
        :loop="false"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        class="custom-swiper"
      >

        <swiper-slide v-for="(image, index) in images" :key="'slide-' + index">
          <img :src="image" :alt="'Image ' + (index + 1)" class="swiper-image" />
        </swiper-slide>
      </swiper>
    </div>


    <!-- New Release Slider -->
    <div
      class="p-2 mt-56 new-release-section opacity-0 transform scale-95 transition-transform duration-700"
      :class="{ 'animate-visible': isVisible }"
      ref="newReleaseSection"
    >
      <div class="text-center  mb-20 font-medium text-5xl">
        New Release
      </div>
      <swiper
        :key="images.length"
        :modules="[Navigation, EffectFade, Mousewheel, Scrollbar]"
        :slides-per-view="4"
        :space-between="100"
        :loop="false"
        :mousewheel="{ forceToAxis: true, releaseOnEdges: false }"
        :scrollbar="{ draggable: true }"
        navigation
        class="custom-new-release-swiper  group"
      >
        <swiper-slide v-for="(newRelease, index) in newReleases" :key="index">
          <div
            class="flex flex-col items-center justify-between bg-white shadow-lg rounded h-[800px]"
          >
            <img
              :src="newRelease.image"
              :alt="newRelease.title"
              class="object-cover mb-4 w-full h-[70%]"
            />
            <h3 class="text-3xl font-bold text-center">{{ newRelease.title }}</h3>
            <p class="text-sm text-center text-gray-500 mt-2">
              {{ newRelease.price }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>


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
    <div class="mt-56">
      <div>
        <div class="text-center">
          <div class="text-center  mb-20 font-medium text-5xl">
        Characters
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

       
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Mousewheel,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import { ref, onMounted } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperInstance = ref(null);
    const isVisible = ref(false);
    const newReleaseSection = ref(null);
    const isPrevDisabled = ref(true); // Disable left arrow initially
    const isNextDisabled = ref(false); // Enable right arrow initially

    const handleSlideChange = () => {
      if (swiperInstance.value) {
        const swiper = swiperInstance.value.swiper; // Access Swiper instance
        isPrevDisabled.value = swiper.isBeginning; // Check if it's the first slide
        isNextDisabled.value = swiper.isEnd; // Check if it's the last slide
      }
    };


   
    const observeSection = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          isVisible.value = entry.isIntersecting; //
        },
        { threshold: 0.1 } 
      );

      if (newReleaseSection.value) {
        observer.observe(newReleaseSection.value);
      }
    };

    onMounted(() => {
      observeSection();
    });

    
    const images = [
      "/public/images/slide img/1.webp",
      "/public/images/slide img/2.webp",
      "/public/images/slide img/3.webp",
      "/public/images/slide img/4.webp",
      "/public/images/slide img/5.webp",
    ];

    
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
      Scrollbar,
      isVisible,
      newReleaseSection,
    };
  },
};
</script>

<style>

.new-release-section {
  transition: all 0.7s ease-in-out;
}

.new-release-section.animate-visible {
  opacity: 1;
  transform: scale(1);
}

.new-release-section {
  opacity: 0;
  transform: scale(0.95);
}


.custom-swiper {
  width: 100%;
  height: 800px;
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  margin: 0 auto;
}

.swiper-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


.custom-new-release-swiper {
  width: 100%;
  padding: 20px 0;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-button-prev,
.swiper-button-next{
  background: white;
  border-radius: 50% ;
  padding: 50px;
  border: 3px solid black;
  color: black;
  
}

.swiper-button-prev,
.swiper-button-next,
.swiper-scrollbar {
  opacity: 0; 
  transition: opacity 0.3s ease-in-out; 
}


.group:hover .swiper-button-prev,
.group:hover .swiper-button-next,
.group:hover .swiper-scrollbar {
  opacity: 1; 
}


.swiper-scrollbar{
  display: flex;
  align-items: center;
}
.swiper-scrollbar-drag {
  height: 100%; 
  background-color: #888; 
  border-radius: 5px; 
  transition: background-color 0.3s ease; 
}


.swiper-scrollbar-drag:hover {
  background-color: #555; 
}
</style>
