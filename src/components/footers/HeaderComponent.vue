<template>
  <section class="sticky top-0 z-50">
    <div class="w-full border-b-2 bg-black top-0">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div>
          <router-link :to="{ name: 'home-page' }">
            <img
              src="/icons/apple-touch-icon.png"
              alt="Logo"
              class="h-24"
            />
          </router-link>
        </div>


        <div class="pr-12">
          <div class="flex gap-7 items-center">
            <!-- Search -->
            <div class="flex items-center gap-2 relative">
              <div class="relative">
                <input
                  v-if="isSearchVisible"
                  ref="searchInput"
                  type="text"
                  placeholder="Search..."
                  class="w-[600px] border border-gray-300 rounded-lg pl-2 py-2 text-black focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                />
                <button
                  v-if="isSearchVisible"
                  class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
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
                class="size-8 text-gray-400 hover:text-gray-500"
                @click="showSearch"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>

            <!-- Wishlist -->
            <div>
              <router-link :to="{name: 'wish-list-page' }">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="size-8 text-gray-400 hover:text-gray-500 cursor-pointer">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2 4.78049C18.3834 4.46575 18.6461 4.20461 18.962 4.02311C19.2778 3.84161 19.6357 3.74609 20 3.74609C20.3643 3.74609 20.7222 3.84161 21.038 4.02311C21.3538 4.20461 21.6166 4.46575 21.8 4.78049L26.4583 12.7772L35.505 14.7372C35.8608 14.8145 36.1902 14.9837 36.4602 15.228C36.7303 15.4723 36.9316 15.7832 37.0441 16.1295C37.1565 16.4759 37.1763 16.8457 37.1013 17.202C37.0263 17.5584 36.8592 17.8888 36.6166 18.1605L30.45 25.0622L31.3833 34.2705C31.4201 34.6331 31.3612 34.999 31.2124 35.3317C31.0635 35.6644 30.83 35.9522 30.5352 36.1664C30.2403 36.3806 29.8944 36.5138 29.5321 36.5525C29.1697 36.5912 28.8034 36.5342 28.47 36.3872L20 32.6538L11.53 36.3872C11.1965 36.5342 10.8303 36.5912 10.4679 36.5525C10.1055 36.5138 9.75961 36.3806 9.46476 36.1664C9.16991 35.9522 8.93641 35.6644 8.78759 35.3317C8.63877 34.999 8.57982 34.6331 8.61664 34.2705L9.54998 25.0622L3.38331 18.1622C3.14035 17.8905 2.9729 17.5599 2.89766 17.2034C2.82243 16.8468 2.84204 16.4767 2.95455 16.1301C3.06705 15.7835 3.26851 15.4724 3.53882 15.228C3.80912 14.9836 4.13881 14.8143 4.49498 14.7372L13.5416 12.7772L18.2 4.78049ZM20 8.31215L16.145 14.9322C15.9992 15.182 15.803 15.3988 15.5689 15.5687C15.3347 15.7385 15.0677 15.8578 14.785 15.9188L7.29831 17.5405L12.4016 23.2522C12.7916 23.6888 12.98 24.2688 12.9216 24.8505L12.15 32.4722L19.16 29.3822C19.4247 29.2655 19.7107 29.2053 20 29.2053C20.2892 29.2053 20.5753 29.2655 20.84 29.3822L27.85 32.4722L27.0783 24.8505C27.049 24.5627 27.0799 24.2719 27.1692 23.9967C27.2584 23.7216 27.404 23.468 27.5966 23.2522L32.7016 17.5405L25.215 15.9188C24.9322 15.8578 24.6652 15.7385 24.4311 15.5687C24.1969 15.3988 24.0007 15.182 23.855 14.9322L20 8.31215Z" fill="#EBE5E5"/>
                </svg>
            </router-link>
            </div>

            <!-- Cart -->
            <!-- Cart -->
            <div>
              <router-link :to="{name: 'cart-page' }">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="size-8 text-gray-400 hover:text-gray-500 cursor-pointer">
                  <path d="M36.37 12.385C36.2167 12.1635 36.012 11.9824 35.7734 11.8573C35.5348 11.7322 35.2694 11.6668 35 11.6667H12.2216L10.2983 7.05002C10.0469 6.44153 9.62001 5.92165 9.07211 5.55657C8.5242 5.1915 7.88004 4.99776 7.22165 5.00002H3.33331V8.33335H7.22165L15.1283 27.3084C15.255 27.6119 15.4686 27.8713 15.7424 28.0537C16.0161 28.2361 16.3377 28.3334 16.6666 28.3334H30C30.695 28.3334 31.3166 27.9017 31.5616 27.2534L36.5616 13.92C36.6561 13.6677 36.6881 13.3963 36.6547 13.1289C36.6213 12.8616 36.5236 12.6063 36.37 12.385ZM28.845 25H17.7783L13.6116 15H32.595L28.845 25Z" fill="#EBE5E5"/>
                  <path d="M17.5 35C18.8807 35 20 33.8807 20 32.5C20 31.1193 18.8807 30 17.5 30C16.1193 30 15 31.1193 15 32.5C15 33.8807 16.1193 35 17.5 35Z" fill="#EBE5E5"/>
                  <path d="M29.1667 35C30.5474 35 31.6667 33.8807 31.6667 32.5C31.6667 31.1193 30.5474 30 29.1667 30C27.786 30 26.6667 31.1193 26.6667 32.5C26.6667 33.8807 27.786 35 29.1667 35Z" fill="#EBE5E5"/>
                </svg>
              </router-link>
            </div>

            <!-- Conditional Button -->
            <div v-if="!isUserLoggedIn">
              <button
                class="flex items-center px-4 py-2 border rounded transition duration-500 hover:bg-opacity-50 hover:bg-white"
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
            <div v-else class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 text-gray-400 hover:text-gray-500 cursor-pointer"
                @click="toggleAccountDropdown"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <!-- Dropdown Menu -->
              <div
                v-if="isAccountDropdownVisible"
                class="absolute mt-2 w-36 bg-white shadow-lg z-50 right-0"
              >
                <ul class="m-0 p-0">
                  <li>
                    <router-link
                      :to="{ name: 'profile-setting-page' }"
                      class="block py-2 right-7 text-center text-md text-gray-700 hover:bg-gray-100 no-underline"
                    >
                      My Account
                    </router-link>
                  </li>
                  <li>
                    <button
                      @click="logout"
                      class="flex justify-center gap-3 text-center w-full py-2 text-md text-gray-700 hover:bg-gray-100"
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
                          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                        />
                      </svg>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="flex justify-center">
        <nav>
          <ul class="gap-10 items-center hidden md:flex m-2">
            <li>
              <router-link
                :to="{ name: 'home-page' }"
                class="text-gray-400 p-3 text-xl no-underline hover:text-gray-500"
                active-class="text-white font-bold"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'product-page' }"
                class="text-gray-400 p-3 text-xl no-underline hover:text-gray-500"
                active-class="text-white font-bold"
              >
                All Products
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'about-us-page' }"
                class="text-gray-400 p-3 text-xl no-underline hover:text-gray-500"
                active-class="text-white font-bold"
              >
                About Us
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'contact-us-page' }"
                class="text-gray-400 p-3 text-xl no-underline hover:text-gray-500"
                active-class="text-white font-bold"
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const isUserLoggedIn = ref(false);
const isAccountDropdownVisible = ref(false);
const isSearchVisible = ref(false);

const router = useRouter();

// Check login state on mount
onMounted(() => {
  const loggedIn = localStorage.getItem("isUserLoggedIn");
  isUserLoggedIn.value = loggedIn === "true";
});

// Logout function
const logout = () => {
  isUserLoggedIn.value = false;
  localStorage.removeItem("isUserLoggedIn");
  router.push({ name: "home-page" });
};

// Toggle dropdown
const toggleAccountDropdown = () => {
  isAccountDropdownVisible.value = !isAccountDropdownVisible.value;
};

// Toggle search visibility
const toggleSearch = () => {
  isSearchVisible.value = false;
};
const showSearch = () => {
  isSearchVisible.value = true;
};

// Navigation
const goToSignUp = () => {
  router.push({ name: "sign-up-page" });
};
const goToCart = () => {
  router.push({ name: "cart-page" });
};
</script>
