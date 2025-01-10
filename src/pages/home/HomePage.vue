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
          <img
            :src="image"
            :alt="'Image ' + (index + 1)"
            class="swiper-image"
          />
        </swiper-slide>
      </swiper>
    </div>

    <!-- New Release Slider -->
    <div
      class="p-2 mt-56 "
      ref="newReleaseContainer"
    >
      <div
        class="text-center mb-20 font-thin text-6xl animate__animated"
        :class="{ 'animate__fadeInUp': isVisibleNewRelease }"
      >New Release</div>
      <div
        :class="{ 'animate__fadeInRight': isVisibleNewRelease }"
        class="animate__animated"
      >
        <swiper
          :key="images.length"
          :modules="[Navigation, EffectFade, Mousewheel, Scrollbar]"
          :slides-per-view="4"
          :space-between="100"
          :loop="false"
          :mousewheel="{ forceToAxis: true, releaseOnEdges: false }"
          :scrollbar="{ draggable: true }"
          navigation
          class="custom-new-release-swiper group"
        >
          <swiper-slide v-for="(newRelease, index) in newReleases" :key="index">
            <div
              class="flex flex-col items-center justify-between bg-white shadow-lg rounded h-[500px] w-[300px]"
            >
              <img
                :src="newRelease.image"
                :alt="newRelease.title"
                class="object-cover mb-4 w-full h-[70%]"
              />
              <h3 class="text-3xl font-bold text-center">
                {{ newRelease.title }}
              </h3>
              <p class="text-sm text-center text-gray-500 mt-2">
                {{ newRelease.price }}
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

<!-- Trending -->
    <div class="mt-7 p-5" ref="trendingContainer">
  
      <div
        class="mb-10 font-thin text-6xl animate__animated text-center"
             :class="{ 'animate__fadeInUp': isVisibleTrending }"
      >
        Trending
      </div>
      <div class="flex flex-wrap animate__animated "   :class="{ 'animate__fadeIn': isVisibleTrending }"
      style="animation-duration: 2s;">
        <div class="col-3 mt-3 " v-for="(item,i) in trending" :key="i">
         <div class=" flex flex-col items-center h-96 cursor-pointer ">
            
 
            <img :src="item.img" alt="" class="object-cover h-64 bg-green-300 w-[60%]">
              <div class="text-center  mt-2 ">
                <span>{{ item.title }}</span> <br>
                <span>{{ item.subtitle }}</span>
                <span class=" text-gray-700 text-sm ">from KHR57,168.52</span>
              </div> 

         </div>
        </div>
     
      </div>
      <div class="text-center ">
        <button class="px-4 py-2 bg-black text-white font-semibold rounded-2xl hover:bg-gray-600">
  View All
</button>
      </div>
    </div>

    <!-- Our Characters -->

    <div class="mt-56 pl-10" ref="characterContainer">
      <div
        class="mb-20 font-thin text-6xl animate__animated text-center"
        :class="{ 'animate__fadeInUp': isVisibleCharacter }"
      >
        Characters
      </div>
      <div class="flex justify-center items-center">
        <div
          class="row animate__animated"
          :class="{ 'animate__fadeIn': isVisibleCharacter }"
          style="animation-duration: 2s;"
        >
          <div
            class="col-3 mt-5"
            v-for="(item, i) in characters"
            :key="i"
          >
            <div class="h-72 w-72 group cursor-pointer overflow-hidden relative rounded-[60px] ">
            
              <img
                :src="item.img"
                alt="Character Img"
                class="h-full w-full  rounded-[60px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-black bg-opacity-40 rounded-[60px] group-hover:bg-opacity-30 transition duration-300" style="opacity: 30%;"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span
                  class="text-white text-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 group-hover:after:w-full"
                >
                  {{ item.title }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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

const swiperInstance = ref(null);
const isVisibleNewRelease = ref(false);
const isVisibleCharacter = ref(false);
const isVisibleTrending = ref(false);
const newReleaseContainer = ref(null);
const characterContainer = ref(null);
const trendingContainer = ref(null);
let lastScrollY = 0;

const handleScrollDirection = (entry) => {
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > lastScrollY;
  lastScrollY = currentScrollY;
  return isScrollingDown && entry.isIntersecting;
};

const observeNewRelease = () => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisibleNewRelease.value = handleScrollDirection(entry);
    },
    { threshold: 0.1 }
  );

  if (newReleaseContainer.value) {
    observer.observe(newReleaseContainer.value);
  }
};

const observeCharacter = () => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisibleCharacter.value = handleScrollDirection(entry);
    },
    { threshold: 0.1 }
  );

  if (characterContainer.value) {
    observer.observe(characterContainer.value);
  }
};


const observeTrending = () => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisibleTrending.value = handleScrollDirection(entry);
    },
    { threshold: 0.1 }
  );

  if (trendingContainer.value) {
    observer.observe(trendingContainer.value);
  }
};
onMounted(() => {
  observeNewRelease();
  observeCharacter();
  observeTrending();
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
    title: "Blind Box Set",
    price: "KHR 48,693.68",
  },
  {
    image: "/public/images/3.png",
    title: "Blind Box Set",
    price: "KHR 48,693.68",
  },
  {
    image: "/public/images/4.png",
    title: "Blind Box Set",
    price: "KHR 48,693.68",
  },
  {
    image: "/public/images/5.png",
    title: "Blind Box Set",
    price: "KHR 48,693.68",
  },
  {
    image: "/public/images/1.png",
    title: "Blind Box Set",
    price: "KHR 48,693.68",
  },
  {
    image: "/public/images/2.png",
    title: "Blind Box Set",
    price: "KHR 48,693.68",
  },
  {
    image: "/public/images/3.png",
    title: "Blind Box Set",
    price: "KHR 48,693.68",
  },
  {
    image: "/public/images/4.png",
    title: "Blind Box Set",
    price: "KHR 48,693.68",
  },
  {
    image: "/public/images/5.png",
    title: "Blind Box Set",
    price: "KHR 48,693.68",
  },
];

const characters = [
  {
    title: "Molly",
    img: "/images/3.png",
  },
  {
    title: "Molly",
    img: "/public/images/2.png",
  },
  {
    title: "Molly",
    img: "/public/images/3.png",
  },
  {
    title: "Molly",
    img: "/public/images/4.png",
  },
  {
    title: "Molly",
    img: "/public/images/5.png",
  },
  {
    title: "Molly",
    img: "/public/images/6.png",
  },
  {
    title: "Molly",
    img: "/public/images/7.png",
  },
  {
    title: "Molly",
    img: "/public/images/7.png",
  },
];
const trending = [
  { 
    img:'/public/images/1.png',
    title: 'POP MART MEGA Collection', 
    subtitle: '100% Space Molly Series 1',
    price:'57,168.52'

  },
  { 
    img:'/public/images/2.png',
    title: 'POP MART MEGA Collection', 
    subtitle: '100% Space Molly Series 1',
    price:'57,168.52'

  },
  { 
    img:'/public/images/3.png',
    title: 'POP MART MEGA Collection', 
    subtitle: '100% Space Molly Series 1',
    price:'57,168.52'

  },
  { 
    img:'/public/images/4.png',
    title: 'POP MART MEGA Collection', 
    subtitle: '100% Space Molly Series 1',
    price:'57,168.52'

  },
  { 
    img:'/public/images/5.png',
    title: 'POP MART MEGA Collection', 
    subtitle: '100% Space Molly Series 1',
    price:'57,168.52'

  },
  { 
    img:'/public/images/6.png',
    title: 'POP MART MEGA Collection', 
    subtitle: '100% Space Molly Series 1',
    price:'57,168.52'

  },
]
</script>

<style scoped>
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
.swiper-button-next {
  background: white;
  border-radius: 50%;
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

.swiper-scrollbar {
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
