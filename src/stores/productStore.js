import { defineStore } from 'pinia';
import { reactive, watchEffect } from 'vue';
import smiski from '@/assets/wishList_img/smiski.jpg';
import sp from '@/assets/wishList_img/anger.webp'

export const useProductStore = defineStore('productStore', () => {

  //set default products for wishlist
  const defaultWishlist = [
      { name: 'Smiski Dressing Series ', price: 10.99, image: smiski },
      { name: 'Skullpanda The Sound Series', price: 15.99, image: sp }, 
  ];

  //import reactive
  const state = reactive({
    products: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [], //get cart products from local storage. if there is none, set empty array
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [], //get wishlist products from local storage. if there is none, set empty array
  });

  // Add default products if wishlist is empty
  if (state.wishlist.length === 0) {
    state.wishlist = [...defaultWishlist];
  }

  // Watch effect for deep reactivity
  watchEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart)); //save the products from cart to local storage whenever state.cart changes
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist)); //save the products from wishlist to local storage whenever state.wishlist changes
  });

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = state.cart.find(item => item.name === product.name); //check if product is already in cart

    //if the product does not exist in cart, add it with the quantity of 1
    if (!existingProduct) {
      state.cart.push({
        name: product.name,
        price: product.price,
        image: product.image || '',
        quantity: 1,
      });
    } else {
      existingProduct.quantity++; //if the product already exists in cart, increment its quantity
    }
  };

  // Remove product from cart
  const removeFromCart = (productName) => {
    state.cart = state.cart.filter(product => product.name !== productName);
  };

  // Add product to wishlist
  const addToWishlist = (product) => {

    const existingProduct = state.wishlist.find(item => item.name === product.name); //check if product is already in wishlist
    //if the product dont exist in wishlist, add it
    if (!existingProduct) {
      state.wishlist.push({
        name: product.name,
        price: product.price,
        image: product.image || '', //in case there is no image, use an empty string
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
