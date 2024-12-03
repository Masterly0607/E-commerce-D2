<template>
  <section>
    <div class="w-full p-8 border-b-2">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div>
          <router-link :to="{ name: 'home-page' }">
            <img src="/icons/favicon.ico" alt="Logo" />
          </router-link>
        </div>

        <!-- Desktop screen Menu -->
        <div>
          <nav>
            <ul class="gap-10 items-center hidden md:flex">
              <li>
                <router-link
                  :to="{ name: 'home-page' }"
                  class="text-gray-400 hover:bg-gray-200 p-3 text-md no-underline"
                  active-class="text-orange-500 font-bold"
                >
                  Home
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'product-page' }"
                  class="text-gray-400 hover:bg-gray-200 p-3 text-md no-underline"
                  active-class="text-orange-500 font-bold"
                >
                  Products
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'about-us-page' }"
                  class="text-gray-400 hover:bg-gray-200 p-3 text-md no-underline"
                  active-class="text-orange-500 font-bold"
                >
                  About Us
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ name: 'contact-us-page' }"
                  class="text-gray-400 hover:bg-gray-200 p-3 text-md"
                  active-class="text-orange-500 font-bold"
                >
                  Contact Us
                </router-link>
              </li>

              <!-- Separator -->
              <div class="w-[2px] h-10 bg-gray-300"></div>

              <!-- Auth Buttons -->
              <div class="flex gap-3">
                <button class="flex items-center px-4 py-2 border border-primary text-gray-500 rounded hover:bg-primary-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 mr-2 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                  </svg>
                  <span class="text-primary">Sign Up</span>
                </button>
                <button class="flex items-center px-4 py-2 bg-primary text-gray-500 rounded hover:bg-primary">
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
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                    />
                  </svg>
                  <span class="text-white">Sign In</span>
                </button>
              </div>
            </ul>
          </nav>
        </div>

        <!-- Mobile screen menu -->
        <button class="block md:hidden text-gray-500 focus:outline-none" @click="toggleMenuDrawer">
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
      class="fixed top-0 right-0 h-full w-64 bg-white z-50  duration-300"
    >
    <!-- translate-x-full =The element is moved 100% of its width to the right, hiding it off-screen. -->
      <div class="p-4 flex justify-between items-center border-b">
        <h3 class="text-lg font-bold">Menu</h3>
        <button class="text-gray-500 hover:text-gray-700" @click="toggleMenuDrawer">
          ✖
        </button>
      </div>
      <ul class="p-4 space-y-4">
        <li><router-link :to="{ name: 'home-page' }" class="block text-gray-700 hover:text-blue-500">Home</router-link></li>
        <li><router-link :to="{ name: 'product-page' }" class="block text-gray-700 hover:text-blue-500">Products</router-link></li>
        <li><router-link :to="{ name: 'about-us-page' }" class="block text-gray-700 hover:text-blue-500">About Us</router-link></li>
        <li><router-link :to="{ name: 'contact-us-page' }" class="block text-gray-700 hover:text-blue-500">Contact Us</router-link></li>
      </ul>
    </div>
     </div>

   
  </section>
</template>

<script setup>
import { ref,onUnmounted } from 'vue';

const menuDrawer = ref(false);

const toggleMenuDrawer = () => {
  menuDrawer.value = !menuDrawer.value;
  if (menuDrawer.value) {
    document.body.style.overflow = 'hidden'; // Disable scrolling
  } else {
    document.body.style.overflow = ''; // Restore scrolling
  }
};
onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style>
/* No additional custom CSS needed */
</style>
