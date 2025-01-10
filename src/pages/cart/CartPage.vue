<template>
  <section class="f-container-1200">
    <back-button></back-button>
    <div class="mt-3">
      <div class="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-green-500 font-bold">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
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
import productStore from '@/stores/productStore';

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
