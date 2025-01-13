import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [],
    productsInCart: {},
  }),
  getters: {},
  actions: {
    addToCart(product) {
      console.log(product);
      const pExist = this.products.includes(product);
      console.log(pExist);
      if (!pExist) {
        this.products[product.id] = product;
        console.log("Product added");
      } else {
        console.log("product not added");
      }
      console.log(this.products);
    },

    // addToFav(product){
    //   const Favor = this.products.includes(product.id, product.Name, product.Costs);
    //   console.log(Favor);
    //   if (!Favor) {
    //     this.products[product.id] = product;
    //     console.log("Product added");
    //   } else {
    //     console.log("product not added");
    //   }
    //   console.log(this.products);
    // },

    incrementProduct(productId) {
      // initialize product count for the product
      if (!this.productsInCart[productId]) {
        this.productsInCart[productId] = 1;
      }
      //   this.productsInCart[productId]++;
      // }

      this.productsInCart[productId]++;

      console.log("AMOUNT IN CART: ");
      console.log(
        `ID: ${productId}; Amount: ${this.productsInCart[productId]}`
      );
    },

    getAmountInCart(productId) {
      if (!this.productsInCart[productId]) {
        this.productsInCart[productId] = 1;
      }

      return this.productsInCart[productId];
    },

    decrementProduct(productId){
      if (!this.productsInCart[productId]){
        this.productsInCart[productId] = 1;
      }
      if (this.productsInCart[productId] > 1) {
        this.productsInCart[productId]--;
      }
      console.log("AMOUNT IN CART: ");
      console.log(
        `ID: ${productId}; Amount: ${this.productsInCart[productId]}`
      );
    }
  },
});
