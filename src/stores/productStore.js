import { defineStore } from 'pinia';
import { reactive, watchEffect } from 'vue';
import smiski from '@/assets/wishList_img/smiski.jpg';
import sp from '@/assets/wishList_img/anger.webp'

export const useProductStore = defineStore('productStore', () => {

  const defaultWishlist = [
      { name: 'Smiski Dressing Series ', price: 10.99, image: smiski },
      { name: 'Skullpanda The Sound Series', price: 15.99, image: sp }, 
  ];

  const state = reactive({
    products: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  });

  // Add default products if wishlist is empty
  if (state.wishlist.length === 0) {
    state.wishlist = [...defaultWishlist];
  }

  // Watch effect for deep reactivity
  watchEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
  });

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = state.cart.find(item => item.name === product.name);

    if (!existingProduct) {
      state.cart.push({
        name: product.name,
        price: product.price,
        image: product.image || '',
        quantity: 1,
      });
    } else {
      existingProduct.quantity++;
    }
  };

  // Remove product from cart
  const removeFromCart = (productName) => {
    state.cart = state.cart.filter(product => product.name !== productName);
  };

  // Add product to wishlist
  const addToWishlist = (product) => {
    if (!product.name || !product.price) {
      console.error("Incomplete product data for wishlist:", product);
      return;
    }

    const existingProduct = state.wishlist.find(item => item.name === product.name);
    if (!existingProduct) {
      state.wishlist.push({
        name: product.name,
        price: product.price,
        image: product.image || '',
        Amount: product.Amount,
      });
    }
  };

  // Remove product from wishlist
  const removeFromWishlist = (product) => {
    state.wishlist = state.wishlist.filter(item => item.name !== product.name);
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
  };
});
