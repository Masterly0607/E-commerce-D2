<template>
    <section class="bg-gray-50 flex items-center justify-center py-10">
      <div class="f-container-1200 bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-4xl w-full">
        <BackButton @click="goToHome"></BackButton>
        <h2 class="font-bold text-3xl text-gray-700 text-center mb-6">Shipping & Delivery</h2>
  
        <div class="shipping-summary mb-8">
          <ul class="list-disc pl-6 text-gray-700 text-lg">
            <li><strong>Free EXPRESS Shipping</strong> on orders above $149.</li>
            <li><strong>$8.99 EXPRESS Shipping</strong> on orders above $69.</li>
            <li>1-4 business days delivery to most areas.</li>
          </ul>
        </div>
  
        <div class="shipping-details mb-8">
          <h3 class="font-bold text-xl text-gray-800 mb-4">
            Express Shipping (Team Global Express Road Express/B2C Priority Parcel)
          </h3>
          <p class="text-gray-600 leading-relaxed">
            We offer Express Shipping, with a charge of <strong>$14.99</strong> on orders under $69, 
            <strong>$8.99</strong> under $149, and free shipping on orders above $149.
          </p>
          <p class="text-gray-600 mt-4 leading-relaxed">
            1-2 Business Days to Melbourne, Sydney, Brisbane, Adelaide, Canberra, and Hobart Metro Areas.
          </p>
          <p class="text-gray-600 mt-2 leading-relaxed">
            2-3 Business Days to areas outside the Express Zone.
          </p>
        </div>
  
        <div class="shipping-notes">
          <h4 class="font-semibold text-lg text-gray-800 mb-3">Note:</h4>
          <ol class="list-decimal pl-6 text-gray-600 leading-relaxed">
            <li>We process confirmed orders within two business days.</li>
            <li>
              We are doing our best to meet the estimated delivery time for your order. However, 
              external factors (e.g., weather conditions and holidays) may cause delays. Thank you for 
              your understanding.
            </li>
          </ol>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  import BackButton from "@/components/buttons/BackButton.vue";
  
  // Router for navigation
  const router = useRouter();
  
  // Go back to Home Page
  const goToHome = () => {
    router.push("/home");
  };
  </script>
  
  <style scoped>
  .list-disc,
  .list-decimal {
    margin: 0;
    padding-left: 1.5rem;
  }
  
  .f-container-1200 {
    max-width: 1200px;
  }
  
  .bg-gray-50 {
    background-color: #f9fafb;
  }
  
  .text-gray-700 {
    color: #4b5563;
  }
  
  .text-gray-600 {
    color: #6b7280;
  }
  
  .text-gray-800 {
    color: #1f2937;
  }
  
  .hover\:text-gray-500:hover {
    color: #6b7280;
  }
  </style>
  