<template>
  <section class="sticky top-0 z-50">
    <div class=" w-full border-b-2 bg-black top-0 ">
      <div class="flex justify-between items-center">

        <div>
          <router-link :to="{ name: 'home-page' }" >
            <img
              src="/public/icons/apple-touch-icon.png"
              alt="Logo"
              class="h-32"
            />
          </router-link>
        </div>


        <div class="pr-36">
          <div class="flex gap-7 items-center">
   
            <div class="flex items-center gap-2 relative">
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

            <!-- Wishlist icon -->
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

            <!-- Conditional Button -->
            <div v-if="!isUserLoggedIn">
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
                  class="size-6 mr-2 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>
                <span class="text-white">Sign Up</span>
              </button>
            </div>

            <!-- My Account Dropdown -->
            <div v-else >

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-white hover:text-orange-500 cursor-pointer"               @click="toggleAccountDropdown">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


              
 

              <!-- Dropdown Menu -->
              <div
                v-if="isAccountDropdownVisible"
                class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
              >
                <ul class="py-2">
                  <li>
                    <router-link
                      :to="{ name: 'profile-setting-page' }"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Account
                    </router-link>
                  </li>
                  <li>
                    <button
                      @click="logout"
                      class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
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
import { ref, computed, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore(); // Pinia store
const isUserLoggedIn = computed(() => userStore.isLoggedIn); // Derived state
const router = useRouter();

const goToHome = () => {
  router.replace('/home');
}

// Dropdown visibility
const isAccountDropdownVisible = ref(false);
const toggleAccountDropdown = () => {
  isAccountDropdownVisible.value = !isAccountDropdownVisible.value;
};

// Search visibility
const isSearchVisible = ref(false);
const toggleSearch = () => {
  isSearchVisible.value = false; // Hide search input
};
const showSearch = () => {
  isSearchVisible.value = true; // Show search input
};

// Logout
const logout = () => {
  userStore.setLoggedIn(false);
  router.push({ name: "home-page" });
};

// Navigation
const goToSignUp = () => {
  router.push({ name: "sign-up-page" });
};

// Cleanup to restore UI state
onUnmounted(() => {
  isSearchVisible.value = false;
  isAccountDropdownVisible.value = false;
});
</script>
