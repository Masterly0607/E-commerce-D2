<template>
  <section>
    <div class="w-full border-b-2 bg-black h-40">
      <div class="flex justify-between items-center">
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
            <div>
              <div class="relative w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Search..."
                  class="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
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

        <!-- Mobile screen menu -->
        <button
          class="block md:hidden text-gray-500 focus:outline-none"
          @click="toggleMenuDrawer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <!-- NavBar -->
      <div class="flex justify-center mb-2">
        <div>
          <nav>
            <ul class="gap-10 items-center hidden md:flex">
              <li>
                <router-link
                  :to="{ name: 'home-page' }"
                  class="text-gray-400 p-3 text-md no-underline "
                  active-class="text-orange-500 font-bold"
      
                >
                  Home
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'product-page' }"
            class="text-gray-400 p-3 text-md no-underline "
                  active-class="text-orange-500 font-bold"
                >
                 All Products
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'new-release-page' }"
                   class="text-gray-400 p-3 text-md no-underline "
                  active-class="text-orange-500 font-bold"
                >
                 New Release
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'trending-page' }"
                 class="text-gray-400 p-3 text-md no-underline "
                  active-class="text-orange-500 font-bold"
                >
                 Trending
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'about-us-page' }"
                  class="text-gray-400 p-3 text-md no-underline "
                  active-class="text-orange-500 font-bold"
                >
                  About Us
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'contact-us-page' }"
             class="text-gray-400 p-3 text-md no-underline "
                  active-class="text-orange-500 font-bold"
                >
                  Contact Us
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- Drawer Menu -->
    <div>
      <div
        v-if="menuDrawer"
        class="absolute inset-0 bg-gray-800 bg-opacity-50 z-40"
        @click="toggleMenuDrawer"
      ></div>
      <!-- inset-0 = Shorthand for top: 0; right: 0; bottom: 0; left: 0, ensuring it spans the entire screen. -->
      <div
        :class="menuDrawer ? 'translate-x-0' : 'translate-x-full'"
        class="fixed top-0 right-0 h-full w-64 bg-white z-50 duration-300"
      >
        <!-- translate-x-full =The element is moved 100% of its width to the right, hiding it off-screen. -->
        <div class="p-4 flex justify-between items-center border-b">
          <h3 class="text-lg font-bold">Menu</h3>
          <button
            class="text-gray-500 hover:text-gray-700"
            @click="toggleMenuDrawer"
          >
            ✖
          </button>
        </div>
        <ul class="p-4 space-y-4">
          <li>
            <router-link
              :to="{ name: 'home-page' }"
              class="block text-gray-700 hover:text-blue-500"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'product-page' }"
              class="block text-gray-700 hover:text-blue-500"
              >Products</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'about-us-page' }"
              class="block text-gray-700 hover:text-blue-500"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'contact-us-page' }"
              class="block text-gray-700 hover:text-blue-500"
              >Contact Us</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goToSignUp = () => {
  router.push({name: 'sign-up-page'}); // Navigate to the '/home' route
};
const goToSignIn = () => {
  router.push({name: 'sign-in-page'}); // Navigate to the '/home' route
};
const menuDrawer = ref(false);

const toggleMenuDrawer = () => {
  menuDrawer.value = !menuDrawer.value;
  if (menuDrawer.value) {
    document.body.style.overflow = "hidden"; // Disable scrolling
  } else {
    document.body.style.overflow = ""; // Restore scrolling
  }
};
onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<style>
/* No additional custom CSS needed */
</style>
