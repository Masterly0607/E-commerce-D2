<template>
  <section>
    <div class="w-full border-b-2 bg-black fixed top-0 z-50">
      <div class="flex justify-between items-center ">
        <!-- Logo -->
        <div>
          <router-link :to="{ name: 'home-page' }">
            <img
              src="/public/icons/apple-touch-icon.png"
              alt="Logo"
              class="h-32"
            />
          </router-link>
        </div>

        <!-- Header -->
        <div class="pr-36">
          <div class="flex gap-7 items-center">
            <div class="flex items-center gap-2 relative">
              <!-- Search Input -->
              <div class="relative">
                <input
                  v-if="isSearchVisible"
                  ref="searchInput"
                  type="text"
                  placeholder="Search..."
                  class="w-[600px] border border-gray-300 rounded-lg pl-2 py-2 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <button
                  v-if="isSearchVisible"
                  class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 " 
                  @click="toggleSearch"
                >
                  ✖
                </button>
              </div>

              <!-- Search Icon -->
              <svg
                v-if="!isSearchVisible"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 text-white hover:text-orange-500 "
                @click="showSearch"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 text-white hover:text-orange-500 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 text-white hover:text-orange-500 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
            <button
              class="flex items-center px-4 py-2 border border-white text-gray-500 rounded hover:bg-orange-500 transition duration-500"
              @click="goToSignUp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 mr-2 text-white "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
              <span class="text-white ">Sign Up</span>
            </button>
          </div>
        </div>
      </div>

      <!-- NavBar -->
      <div class="flex justify-center mb-2">
        <nav>
          <ul class="gap-10 items-center hidden md:flex">
            <li>
              <router-link
                :to="{ name: 'home-page' }"
                class="text-gray-400 p-3 text-xl no-underline "
                active-class="text-orange-500 font-bold"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'product-page' }"
                class="text-gray-400 p-3 text-xl no-underline "
                active-class="text-orange-500 font-bold"
              >
                All Products
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'new-release-page' }"
                class="text-gray-400 p-3 text-xl no-underline "
                active-class="text-orange-500 font-bold"
              >
                New Release
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'trending-page' }"
                class="text-gray-400 p-3 text-xl no-underline "
                active-class="text-orange-500 font-bold"
              >
                Trending
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'about-us-page' }"
                class="text-gray-400 p-3 text-xl no-underline "
                active-class="text-orange-500 font-bold"
              >
                About Us
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'contact-us-page' }"
                class="text-gray-400 p-3 text-xl no-underline "
                active-class="text-orange-500 font-bold"
              >
                Contact Us
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goToSignUp = () => {
  router.push({ name: "sign-up-page" });
};

// Search Visibility
const isSearchVisible = ref(false);
const searchInputRef = ref(null);

const toggleSearch = () => {
  isSearchVisible.value = false; // Hide search input
};

const showSearch = () => {
  isSearchVisible.value = true; // Show search input
  nextTick(() => {
    searchInputRef.value?.focus(); // Ensure input gets focused
  });
};

// Cleanup to restore UI state
onUnmounted(() => {
  isSearchVisible.value = false;
});
</script>
