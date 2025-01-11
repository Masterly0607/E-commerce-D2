<template>
    <section class="history">
      <!-- Main Order Section -->
      <div class="myOrder">
        <h1 class="title">Order History</h1>
  
        <!-- Tabs for Order States -->
        <div class="tabs">
          <button
            class="tab"
            @click="changeColor('All orders')"
            :class="{ active: activeButton === 'All orders' }"
          >
            All Orders
          </button>
          <button
            class="tab"
            @click="changeColor('Shipped')"
            :class="{ active: activeButton === 'Shipped' }"
          >
            Shipped
          </button>
          <button
            class="tab"
            @click="changeColor('Not yet shipped')"
            :class="{ active: activeButton === 'Not yet shipped' }"
          >
            Not Yet Shipped
          </button>
        </div>
  
        <!-- Order List -->
        <div class="orderList">
          <div
            v-for="product in filteredProducts"
            :key="product.name"
            class="product"
          >
            <!-- Product Image -->
            <div class="productImageWrapper">
              <img
                class="productImg"
                :src="getImagepath(product.image)"
                :alt="product.name"
              />
            </div>
  
            <!-- Product Details -->
            <div class="productDetails">
              <h3 class="productTitle">{{ product.name }}</h3>
              <p class="productPrice">Price: ${{ product.price }}</p>
              <p class="status">
                {{ new Date(product.date) >= new Date() ? "Will be delivered on " + product.date : "Delivered on " + product.date }}
              </p>
              <div class="buttons">
                <button class="btn btn-primary" @click="addToCart(product)">
                  Buy Again
                </button>
                <button class="btn btn-secondary">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Message Section -->
      <div class="message">
        <h3>Need Help?</h3>
        <p>
          Can't find the answer? Describe your issue and we’ll provide a solution
          shortly.
        </p>
        <router-link to="/contact" class="btn btn-primary">
          Contact Us
        </router-link>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "OrderHistory",
    setup() {
      const activeButton = ref("All orders");
  
      const changeColor = (buttonName) => {
        activeButton.value = buttonName;
      };
  
      return {
        activeButton,
        changeColor,
      };
    },
    computed: {
      filteredProducts() {
        if (this.activeButton === "Shipped") {
          return this.products.filter(
            (product) => new Date(product.date) < new Date()
          );
        } else if (this.activeButton === "Not yet shipped") {
          return this.products.filter(
            (product) => new Date(product.date) >= new Date()
          );
        }
        return this.products;
      },
    },
    methods: {
      getImagepath(image) {
        return `/images/orderHistory_img/${image}`;
      },
      addToCart(product) {
        console.log("Add to cart:", product);
      },
    },
    data() {
      return {
        products: [
          {
            name: "POP UP PARADE Joker Figure",
            price: "30.99",
            date: "July 8, 2025",
            image: "Joker6.jpg",
          },
          {
            name: "Fire Emblem: Fuukasetsugetsu - Byleth",
            price: "25.99",
            date: "March 15, 2024",
            image: "wow.png",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* General Layout */
  .history {
    display: flex;
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .myOrder {
    flex: 3;
  }
  
  .message {
    flex: 1;
    background-color: #fdfdfd;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Titles */
  .title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 14px;
    color: #555;
  }
  
  /* Tabs */
  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .tab {
    padding: 8px 16px;
    border-radius: 5px;
    background-color: #f1f1f1;
    color: #555;
    font-size: 14px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .tab.active {
    background: linear-gradient(90deg, #007bff, #0056b3);
    color: white;
    font-weight: bold;
  }
  
  .tab:hover {
    background-color: #007bff;
    color: #fff;
  }
  
  /* Order List */
  .orderList {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .product {
    display: flex;
    gap: 15px;
    padding: 15px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .product:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .productImageWrapper {
    flex-shrink: 0;
  }
  
  .productImg {
    width: 80px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
  }
  
  .productDetails {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .productTitle {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }
  
  .productPrice {
    font-size: 14px;
    color: #555;
  }
  
  .status {
    font-size: 13px;
    color: #777;
    margin-bottom: 10px;
  }
  
  /* Buttons */
  .buttons {
    display: flex;
    gap: 10px;
  }
  
  .btn {
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  
  .btn-secondary {
    background-color: #e0e0e0;
    color: #555;
  }
  
  .btn-secondary:hover {
    background-color: #c0c0c0;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .history {
      flex-direction: column;
    }
  
    .tabs {
      justify-content: space-between;
    }
  }
  </style>
  