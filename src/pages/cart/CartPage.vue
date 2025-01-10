<template>
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto px-4 py-8">
      <!-- Back Button -->
      <back-button></back-button>

      <!-- Page Header -->
      <div class="mb-6">
        <div class="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 text-gray-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <h1 class="text-4xl font-extrabold text-gray-900">Cart</h1>
        </div>
        <p class="text-gray-500 text-sm">Review your items before checkout</p>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Shopping Bag -->
        <div class="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-gray-800 mb-4">Shopping Bag</h2>
          <p class="text-sm text-gray-600 mb-6">{{ cartItems.length }} items in your bag</p>

          <div
            v-for="(item, index) in cartItems"
            :key="index"
            class="flex items-center justify-between mb-4 border-b pb-4"
          >
            <!-- Item Details -->
            <div class="flex items-center">
              <img
                :src="item.image"
                alt="Product Image"
                class="w-20 h-20 rounded-lg mr-4 border"
              />
              <div>
                <h3 class="text-base font-medium text-gray-800">{{ item.name }}</h3>
                <p class="text-sm text-gray-500">${{ item.price }}</p>
              </div>
            </div>

            <!-- Quantity and Total -->
            <div class="flex items-center gap-4">
              <select
                v-model="item.quantity"
                class="border rounded-md px-2 py-1 text-gray-700 hover:border-blue-500 focus:ring-2 focus:ring-blue-500"
              >
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
              <div class="text-base font-bold text-gray-800">${{ (item.price * item.quantity).toFixed(2) }}</div>
              <button
                @click="removeItem(item)"
                class="text-red-500 focus:outline-none hover:bg-red-100 p-2 rounded-full transition duration-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>

          <!-- Shipping Form -->
          <div class="mb-6 space-y-4">
            <div>
              <label class="text-sm text-gray-600">Country</label>
              <select class="w-full border rounded-md px-3 py-2 text-gray-700 hover:border-blue-500 focus:ring-2 focus:ring-blue-500">
                <option>USA</option>
                <option>Canada</option>
                <option>Cambodia</option>
                <option>Japan</option>
                <option>France</option>
                <option>Korea</option>
                <option>Singapore</option>
                <option>Thailand</option>
              </select>
            </div>
            <div>
              <label class="text-sm text-gray-600">State/City</label>
              <select class="w-full border rounded-md px-3 py-2 text-gray-700 hover:border-blue-500 focus:ring-2 focus:ring-blue-500">
                <option>California</option>
                <option>New York</option>
                <option>Phnom Penh</option>
                <option>Tokyo</option>
              </select>
            </div>
            <div>
              <label class="text-sm text-gray-600">ZIP Code</label>
              <input
                type="text"
                class="w-full border rounded-md px-3 py-2 text-gray-700 hover:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter ZIP Code"
              />
            </div>
            <button class="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-150 ease-in-out">
              Update Shipping
            </button>
          </div>

          <!-- Coupon Section -->
          <div class="mb-6">
            <h4 class="text-sm font-semibold text-gray-800 mb-2">Coupon Code</h4>
            <div class="flex gap-2">
              <input
                type="text"
                placeholder="Enter your coupon code"
                class="flex-1 border rounded-md px-3 py-2 text-gray-700 hover:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <button class="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-150 ease-in-out">
                Apply
              </button>
            </div>
          </div>

        <div class="bg-gray-500 p-4 rounded-md text-white">
          <p class="flex justify-between">
            <span>Cart Subtotal</span>
            <span>${{ cartSubtotal }}</span>
          </p>
          <p class="flex justify-between">
            <span>Discount</span>
            <span>-$5</span>
          </p>
          <p class="flex justify-between font-bold">
            <span>Cart Total</span>
            <span>${{ cartSubtotal - 5 }}</span>
          </p>
        </div>
        <!-- <router-link :to="{name: 'checkout'}"> -->
        <button class="mt-4 w-full bg-gray-500 text-white rounded-md px-4 py-2 hover:bg-red-700">
          Proceed to Checkout
        </button>
        <!-- </router-link> -->
      </div>
    </div>
  </section>
</template>

<script>
import productStore from "@/stores/productStore";

export default {
  computed: {
    cartItems() {
      return productStore.state.cart;
    },
    cartSubtotal() {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
  methods: {
    removeItem(item) {
      productStore.actions.removeFromCart(item.name);
    },
  },
};
</script>
    computed: {
      cartSubtotal() {
        return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
      // hasItems() {
      //   return this.cartItems.length > 0
      // }
    },
    // methods: {
    //   goToCheckout() {
    //     this.$router.push({name: 'checkout'})
    //   }
    // }
  };
  </script>
