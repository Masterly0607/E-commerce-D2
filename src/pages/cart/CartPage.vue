<template>
  <section class="f-container-1200">
    <back-button></back-button>
    <div class="mt-3">
      <div class="flex items-center gap-3">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.3699 12.385C36.2166 12.1635 36.0119 11.9824 35.7733 11.8573C35.5347 11.7322 35.2693 11.6668 34.9999 11.6667H12.2216L10.2983 7.05002C10.0468 6.44153 9.61995 5.92165 9.07205 5.55657C8.52414 5.1915 7.87997 4.99776 7.22159 5.00002H3.33325V8.33335H7.22159L15.1283 27.3084C15.2549 27.6119 15.4685 27.8713 15.7423 28.0537C16.016 28.2361 16.3376 28.3334 16.6666 28.3334H29.9999C30.6949 28.3334 31.3166 27.9017 31.5616 27.2534L36.5616 13.92C36.6561 13.6677 36.688 13.3963 36.6546 13.1289C36.6212 12.8616 36.5236 12.6063 36.3699 12.385ZM28.8449 25H17.7783L13.6116 15H32.5949L28.8449 25Z" fill="black"/>
          <path d="M17.5 35C18.8807 35 20 33.8807 20 32.5C20 31.1193 18.8807 30 17.5 30C16.1193 30 15 31.1193 15 32.5C15 33.8807 16.1193 35 17.5 35Z" fill="black"/>
          <path d="M29.1667 35C30.5475 35 31.6667 33.8807 31.6667 32.5C31.6667 31.1193 30.5475 30 29.1667 30C27.786 30 26.6667 31.1193 26.6667 32.5C26.6667 33.8807 27.786 35 29.1667 35Z" fill="black"/>
        </svg>
        <div class="text-3xl font-bold">Cart</div>
      </div>
      <div class="ml-14 text-gray-400 font-thin">All items to checkout</div>
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
        <button class="mt-4 w-full bg-gray-500 text-white rounded-md px-4 py-2 hover:bg-red-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import {useProductStore} from '@/stores/productStore';

export default {
  computed: {
    cartItems() {
      const cart = useProductStore().state.cart;
      console.log('Cart Items:', cart);
      return cart;
    },
    cartSubtotal() {
      return this.cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0);
    }
  },
  methods: {
    removeItem(item) {
      useProductStore().removeFromCart(item.name);
    }
  }
};
</script>
