<template>
    <div class="container">
      <div class="billing-layout">
        <!-- Left Side - Shipping Form -->
        <div class="shipping-form">
          <h1>Billing Detail</h1>
          
          <div class="shipping-info">
            <h3>Shipping Information</h3>
            
            <div class="form-group">
              <label>Email</label>
              <input v-model="formData.email" type="email" required>
            </div>
  
            <div class="form-group">
              <label>Name</label>
              <input v-model="formData.name" type="text" required>
            </div>
  
            <div class="form-group">
              <label>Country</label>
              <select v-model="formData.country">
                <option value="cambodia">Cambodia</option>
                <option value="thailand">Thailand</option>
                <option value="vietnam">Vietnam</option>
              </select>
            </div>
  
            <div class="form-group">
              <label>Phone number</label>
              <input v-model="formData.phone" type="tel" required>
            </div>
  
            <div class="form-group">
              <label>Address</label>
              <textarea v-model="formData.address" rows="3" required></textarea>
            </div>
  
            <div class="form-group checkbox">
              <label>
                <input v-model="formData.saveInfo" type="checkbox">
                <span>Save this information for faster check-out next time</span>
              </label>
            </div>
          </div>
        </div>
  
        <!-- Right Side - Order Summary -->
        <div class="order-summary">
          <div class="summary-content">
            <!-- Cart Items -->
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
              <div class="item-info">
                <img :src="item.image" :alt="item.name">
                <span>{{ item.name }}</span>
              </div>
              <span>${{ item.price }}</span>
            </div>
  
            <!-- Summary -->
            <div class="summary-totals">
              <div class="summary-row">
                <span>Subtotal:</span>
                <span>${{ subtotal }}</span>
              </div>
              <div class="summary-row">
                <span>Discount:</span>
                <span>-${{ discount }}</span>
              </div>
              <div class="summary-row total">
                <span>Total:</span>
                <span>${{ total }}</span>
              </div>
            </div>
  
            <!-- Payment Methods -->
            <div class="payment-methods">
              <label class="payment-method">
                <input type="radio" v-model="formData.paymentMethod" value="bank">
                <span>Bank</span>
                <div class="payment-icons">
                  <img src="/src/assets/image/visa.png" alt="Visa">
                  <img src="/src/assets/image/shopping cart.jpg" alt="shopping">
                  <img src="/src/assets/image/Qk pay.jpg" alt="Other cards">
                </div>
              </label>
              <label class="payment-method">
                <input type="radio" v-model="formData.paymentMethod" value="cod">
                <span>Cash on delivery</span>
              </label>
            </div>
  
            <!-- Coupon -->
            <div class="coupon-section">
              <input v-model="couponCode" type="text" placeholder="Coupon code">
              <button @click="applyCoupon" class="coupon-button">
                Apply coupon
              </button>
            </div>
  
            <!-- Place Order Button -->
            <button @click="placeOrder" class="place-order-button">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BillingDetails',
    data() {
      return {
        formData: {
          email: '',
          name: '',
          country: 'cambodia',
          phone: '',
          address: '',
          saveInfo: false,
          paymentMethod: 'bank'
        },
        cartItems: [
          {
            id: 1,
            name: 'Kujinata',
            price: 35,
            image: '/src/assets/images/yugi.png'
          },
          {
            id: 2,
            name: 'Kujinata',
            price: 11,
            image: '/src/assets/images/miku.jpg'
          },
          {
            id: 3,
            name: 'Kujinata',
            price: 35,
            image: '/src/assets/images/kuji.jpg'
          }
        ],
        couponCode: '',
        discount: 5
      }
    },
    computed: {
      subtotal() {
        return this.cartItems.reduce((sum, item) => sum + item.price, 0)
      },
      total() {
        return this.subtotal - this.discount
      }
    },
    methods: {
      applyCoupon() {
        alert('Coupon applied!')
      },
      placeOrder() {
        if (this.validateForm()) {
          console.log('Order placed:', {...this.formData, items: this.cartItems, total: this.total
        })
          alert('Order placed successfully!')
        }
      },
      validateForm() {
        return true
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  
  .billing-layout {
    display: flex;
    gap: 42px;
  }
  
  .shipping-form {
    flex: 1;
    min-width: 600px;
    margin: 50px;
  }
  
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 200px;
  }
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  
  .shipping-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  .form-group label {
    font-weight: 500;
  }
  
  .form-group input, .form-group select,
  .form-group textarea {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .form-group textarea {
    resize: vertical;
  }
  
  .checkbox {
    flex-direction: row;
    align-items: center;
  }
  
  .checkbox label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-style: italic;
    font-size: 12px;
  }
  
  .order-summary {
    width: 600px;
    background-color: #C72323;
    color: white;
    padding: 10px 25px;
    border-radius: 8px;
    margin-top: 120px;
  }
  
  .summary-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .item-info {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .item-info img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    background-color: white;
    padding: 1px;
    border-radius: 2px;
  }
  
  .summary-totals {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .summary-row {
    display: flex;
    justify-content: space-between;
  }
  
  .summary-row.total {
    font-weight: bold;
  }
  
  .payment-methods {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .payment-method {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .payment-icons {
    display: flex;
    gap: 8px;
  }
  
  .payment-icons img {
    height: 24px;
  }
  
  .coupon-section {
    display: flex;
    gap: 8px;
  }
  
  .coupon-section input {
    flex: 1;
    padding: 8px;
    border-radius: 4px;
    border: none;
    color: black;
  }
  
  .coupon-button {
    background-color: white;
    color: #dc2626;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
  
  .place-order-button {
    width: 100%;
    background-color: black;
    color: white;
    padding: 12px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    margin-top: 16px;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .billing-layout {
      flex-direction: column;
    }
    
    .order-summary {
      width: 100%;
    }
  }
  </style>