<template>
    <section class="f-container-1200">
      <back-button></back-button>
      <div class="mt-3">
        <div class="flex items-center gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
              fill="#F1FE5D"
            />
          </svg>
          <div class="text-3xl font-bold">Wishlist</div>
        </div>
        <div class="ml-14 text-gray-400 font-thin">
          All items for adding to Cart
        </div>
      </div>
      <div class="wishList mt-5">
        <div class="wishListHeader">
          <div class="wishLine" />
        </div>
        <div class="wishNav"></div>
        <div v-if="products.length === 0" class="emptyWishlist">
          <img class="empty" src="/images/wishList_img/empty.jpg" />
          <h4>Your wishlist is empty.</h4>
          <router-link :to="{ name: 'home-page' }" class="browse">
            Browse Items
          </router-link>
        </div>
        <div v-else class="wishAdd">
          <p class="explore">
            Explore, purchase, or remove items from your Wish List here.
          </p>
          <button class="AddCart" @click="addAllToCart">Add all to Cart</button>
        </div>
        <div class="wishItem" v-for="product in products" :key="product.name">
          <div class="product">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                fill="#F1FE5D"
              />
            </svg>
            <img
              class="productImage"
              :src="getImagePath(product.image)"
              :alt="product.name"
            />
            <div class="productName">{{ product.name }}</div>
          </div>
          <div class="price">
            <div class="priceValue">$ {{ product.price }}</div>
            <button class="add" @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
        <div class="wishLine2" />
      </div>
    </section>
  </template>
  
  <script>
  import productStore from "@/stores/productStore";
  
  export default {
    name: "Wish",
    data() {
      return {
        products: [
          { name: "POP UP PARADE Joker Figure", image: "joker.png", price: "30.99" },
          { name: "POP MART Skullpanda The Sound Series", image: "anger.webp", price: "15.99" },
          { name: "Smiski Dressing Series", image: "smiski.jpg", price: "11.99" },
          { name: "Sonny Angel Dinosaur Series", image: "angel.avif", price: "25.00" },
        ],
      };
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
        this.products = this.products.filter(
          (product) => product.name !== item.name
        );
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

  .wishList {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f8f9fa;
  }
  

  .wishListHeader {
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #dee2e6;
    padding-bottom: 15px;
    margin-bottom: 25px;
    color: #343a40;
  }
  
  .wishLine,
  .wishLine2 {
    width: 100%;
    border-top: 1px solid #dee2e6;
    margin: 10px 0;
  }
  
  .emptyWishlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: #6c757d;
    text-align: center;
  }
  
  .empty {
    width: 250px;
    height: auto;
    border-radius: 10px;
  }
  
  .browse {
    text-decoration: none;
    color: white;
    background-color: #007bff;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .browse:hover {
    background-color: #0056b3;
  }
  
  .wishAdd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    color: #495057;
    font-size: 16px;
  }
  
  .AddCart {
    border: none;
    background-color: #28a745;
    color: white;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .AddCart:hover {
    background-color: #218838;
  }
  
  .wishItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .wishItem:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
  }
  
  .product {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .productImage {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #dee2e6;
  }
  
  .productName {
    font-size: 18px;
    color: #343a40;
    font-weight: bold;
  }
  
  /* Price Section */
  .price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }
  
  .priceValue {
    font-size: 18px;
    color: #495057;
    font-weight: bold;
  }
  
  .add {
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .add:hover {
    background-color: #0056b3;
  }
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    object-fit: cover;
  }
  </style>
  