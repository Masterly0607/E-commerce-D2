<template>
    <section class="bg-gray-100 py-10">
      <div class="container mx-auto px-4">

        <back-button></back-button>
 
        <div class="mt-5">
          <div class="flex items-center gap-3">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                fill="#FACC15"
              />
            </svg>
            <h1 class="text-4xl font-extrabold text-gray-900">Wishlist</h1>
          </div>
          <p class="ml-8 text-gray-600 text-sm mt-2">
            Save your favorite items for quick access.
          </p>
        </div>
  
        <div class="wishlist mt-8">
          <div v-if="products.length === 0" class="empty-wishlist">
            <img
              src="/images/wishList_img/empty.jpg"
              alt="Empty Wishlist"
              class="rounded-lg shadow-md"
            />
            <h4 class="text-gray-600 text-lg font-medium mt-5">
              Your wishlist is empty.
            </h4>
            <router-link to="/home" class="browse-btn">Browse Items</router-link>
          </div>
  
          <div v-else>

            <div class="flex justify-between items-center bg-white p-5 rounded-lg shadow-sm mb-5">
              <p class="text-gray-700 text-sm">
                Explore, purchase, or remove items from your wishlist.
              </p>
              <button class="add-all-btn" @click="addAllToCart">Add All to Cart</button>
            </div>
  
    
            <div
              v-for="product in products"
              :key="product.name"
              class="wishlist-item flex justify-between items-center bg-white p-5 rounded-lg shadow-sm mb-4"
            >
              <div class="flex items-center gap-5">
                <img
                  :src="getImagePath(product.image)"
                  :alt="product.name"
                  class="item-img"
                />
                <div>
                  <h3 class="item-name text-xl font-bold text-gray-800">
                    {{ product.name }}
                  </h3>
                  <p class="item-price text-md text-gray-600">
                    $ {{ product.price }}
                  </p>
                </div>
              </div>
              <button class="add-to-cart-btn" @click="addToCart(product)">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import productStore from "@/stores/productStore";
  
  export default {
    name: "Wishlist",
    data() {
        return {
            products: [],
        };
    },
    computed: {

    },
    methods: {
      getImagePath(image) {
        return `/images/wishList_img/${image}`;
      },
      addToCart(item) {
        productStore.actions.addToCart({
          name: item.name,
          price: item.price,
          quantity: 1,
          image: this.getImagePath(item.image),
        });
        this.products = this.products.filter((product) => product.name !== item.name);
      },
      addAllToCart() {
        this.products.forEach((item) => {
          productStore.actions.addToCart({
            name: item.name,
            price: item.price,
            quantity: 1,
            image: this.getImagePath(item.image),
          });
        });
        this.products = [];
      },
    },
  };
  </script>
  
  <style scoped>
  .wishlist {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .empty-wishlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
  
  .empty-wishlist img {
    width: 300px;
    height: auto;
  }
  
  .browse-btn {
    background-color: #4f46e5;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .browse-btn:hover {
    background-color: #3730a3;
  }
  
  .add-all-btn {
    background-color: #22c55e;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .add-all-btn:hover {
    background-color: #15803d;
  }
  
  .wishlist-item {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .wishlist-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  
  .item-img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
  }
  
  .add-to-cart-btn {
    background-color: #3b82f6;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .add-to-cart-btn:hover {
    background-color: #1e40af;
  }
  </style>
  