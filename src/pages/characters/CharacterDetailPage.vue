<template>
    <div class="p-10">
      <h1 class="text-4xl font-bold">{{ character.title }}</h1>
      <div
        class="h-72 w-72 group cursor-pointer overflow-hidden relative rounded-[60px]"
      >
        <img
          :src="character.img"
          alt="Character Image"
          class="h-full w-full rounded-[60px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-40 rounded-[60px] group-hover:bg-opacity-30 transition duration-300"
          style="opacity: 30%;"
        ></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span
            class="text-white text-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 group-hover:after:w-full"
          >
            {{ character.title }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from "vue";
  import { useRoute, useRouter } from "vue-router";
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
  
      // List of characters (could be fetched from an API)
      const characters = [
        { title: "Molly-Space", img: "/images/3.png" },
        { title: "Molly-Ocean", img: "/public/images/2.png" },
        { title: "Molly-Forest", img: "/public/images/4.png" },
        // Add more characters
      ];
  
      // Using the route params to find the matching character
      const character = computed(() =>
        characters.find((char) => char.title === route.params.title) || {}
      );
  
      // Method to navigate back
      const goBack = () => {
        router.go(-1); // Go back to the previous page
      };
  
      return { character, goBack };
    },
  };
  </script>
  
  <style scoped>
  /* Add styles if necessary */
  </style>
  