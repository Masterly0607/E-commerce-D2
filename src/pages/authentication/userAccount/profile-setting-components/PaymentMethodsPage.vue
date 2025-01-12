<template>
    <section>
    
      <div class="payment-page">
        <back-button></back-button>
        <h1 class="title">Payment Methods</h1>
        <p class="description">Manage your saved payment methods below.</p>
  
        <!-- Saved Payment Methods -->
        <div class="payment-methods">
          <h2 class="section-title">Saved Payment Methods</h2>
          <div v-if="paymentMethods.length" class="methods-list">
            <div
              v-for="(method, index) in paymentMethods"
              :key="index"
              class="payment-method-card"
            >
              <div class="method-details">
                <p class="method-type">{{ method.type }}</p>
                <p class="method-number">**** **** **** {{ method.lastFour }}</p>
                <p class="method-expiry">Expires {{ method.expiry }}</p>
              </div>
              <button
                @click="deletePaymentMethod(index)"
                class="remove-btn"
              >
                Remove
              </button>
            </div>
          </div>
          <p v-else class="no-methods">You have no saved payment methods.</p>
        </div>
  
        <!-- Add Payment Method Form -->
        <div class="add-method-form">
          <h2 class="section-title">Add Payment Method</h2>
          <form @submit.prevent="addPaymentMethod">
            <div class="form-group">
              <label for="type">Payment Type</label>
              <select v-model="newMethod.type" id="type" required>
                <option value="" disabled>Select Payment Type</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>
  
            <div class="form-group">
              <label for="number">Card Number</label>
              <input
                v-model="newMethod.number"
                id="number"
                type="text"
                placeholder="Enter card number"
                maxlength="16"
                required
              />
            </div>
  
            <div class="form-group">
              <label for="expiry">Expiry Date</label>
              <input
                v-model="newMethod.expiry"
                id="expiry"
                type="month"
                required
              />
            </div>
  
            <button type="submit" class="add-btn">Add Payment Method</button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive, ref, onMounted } from "vue";
  
  // Payment Methods State
  const paymentMethods = ref([]);
  
  // New Payment Method Form
  const newMethod = reactive({
    type: "",
    number: "",
    expiry: "",
  });
  
  // Load saved payment methods from localStorage
  const loadPaymentMethods = () => {
    const storedMethods = JSON.parse(localStorage.getItem("paymentMethods"));
    if (storedMethods) {
      paymentMethods.value = storedMethods;
    }
  };
  
  // Save payment methods to localStorage
  const savePaymentMethods = () => {
    localStorage.setItem("paymentMethods", JSON.stringify(paymentMethods.value));
  };
  
  // Add a new payment method
  const addPaymentMethod = () => {
    const lastFour = newMethod.number.slice(-4);
  
    paymentMethods.value.push({
      type: newMethod.type,
      lastFour: lastFour,
      expiry: newMethod.expiry,
    });
  
    savePaymentMethods();
    alert("Payment method added successfully!");
  
    // Reset form
    newMethod.type = "";
    newMethod.number = "";
    newMethod.expiry = "";
  };
  
  // Delete a payment method
  const deletePaymentMethod = (index) => {
    if (confirm("Are you sure you want to remove this payment method?")) {
      paymentMethods.value.splice(index, 1);
      savePaymentMethods();
      alert("Payment method removed successfully!");
    }
  };
  
  // Load payment methods on page load
  onMounted(() => {
    loadPaymentMethods();
  });
  </script>
  
  <style scoped>
  /* General Styles */
  .payment-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }
  
  .description {
    font-size: 14px;
    color: #666;
    margin-bottom: 30px;
    text-align: center;
  }
  
  /* Payment Methods List */
  .payment-methods {
    margin-bottom: 30px;
  }
  
  .section-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .methods-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .payment-method-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .method-details {
    display: flex;
    flex-direction: column;
  }
  
  .method-type {
    font-weight: bold;
    font-size: 16px;
  }
  
  .method-number,
  .method-expiry {
    font-size: 14px;
    color: #666;
  }
  
  .remove-btn {
    background-color: #ff4d4f;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .remove-btn:hover {
    background-color: #d9363e;
  }
  
  /* Add Payment Method Form */
  .add-method-form {
    margin-top: 30px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-size: 14px;
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .add-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
  }
  
  .add-btn:hover {
    background-color: #0056b3;
  }
  
  .no-methods {
    font-size: 14px;
    color: #999;
    text-align: center;
    margin-top: 10px;
  }
  </style>
  