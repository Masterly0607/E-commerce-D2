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

    <div class="p-8 flex flex-col lg:flex-row gap-8">
      <div class="flex-1 bg-gray-300 p-12 rounded-lg lg:flex-row">
        <h2 class="text-xl font-bold">Shopping Bag</h2>
        <p class="text-gray-600 mb-6">{{ cartItems.length }} items in your bag</p>

        <div v-for="(item, index) in cartItems" :key="index" class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <img :src="item.image" alt="Product Image" class="w-16 h-16 rounded-lg mr-4" />
            <div>
              <h3 class="text-gray-800">{{ item.name }}</h3>
              <p class="text-sm text-gray-500">${{ item.price }}</p>
            </div>
          </div>
          <div class="flex items-center">
            <select v-model="item.quantity" class="border rounded-md px-2 py-1 text-gray-700 mr-4">
              <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
            <p class="text-gray-800">${{ item.price * item.quantity }}</p>
            <button @click="removeItem(item)" class="ml-4 text-red-500">Remove</button>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-96 bg-white shadow-md p-6 rounded-lg">
        <h3 class="text-lg font-bold mb-4">Calculated Shipping</h3>
        <div class="space-y-4 mb-6">
          <div>
            <label class="text-sm text-gray-600">Country</label>
            <select class="w-full border rounded-md px-3 py-2 text-gray-700">
              <option>USA</option>
              <option>Canada</option>
              <option>Cambodia</option>
              <option>Japan</option>
              <option>French</option>
              <option>Korea</option>
              <option>Sigapour</option>
              <option>Thailand</option>
            </select>
          </div>
          <div>
            <label class="text-sm text-gray-600">State/City</label>
            <select class="w-full border rounded-md px-3 py-2 text-gray-700 ">
              <option>California</option>
              <option>New York</option>
              <option>Phnom Penh</option>
              <option>Tokyo</option>
            </select>
          </div>
          <div>
            <label class="text-sm text-gray-600">ZIP Code</label>
            <input type="text" class="w-full border rounded-md px-3 py-2 text-gray-700" />
          </div>
          <button class="w-full bg-gray-500 rounded-md px-4 py-2 text-white hover:bg-red-700">Update</button>
        </div>

        <div class="mb-6">
          <h4 class="text-sm font-semibold mb-2">Coupon Code</h4>
          <p class="text-xs text-gray-500 mb-2">Add a coupon if you have one!</p>
          <div class="flex gap-2">
            <input type="text" placeholder="Coupon code..." class="flex-1 border rounded-md px-3 py-2 text-gray-700" />
            <button class="bg-gray-500 rounded-md px-4 py-2 text-white hover:bg-red-700">Apply</button>
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
