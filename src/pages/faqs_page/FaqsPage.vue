<template>
    <section class="bg-gray-50 flex items-center justify-center py-10">
      <div class="f-container-1200 bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-4xl w-full">
        <BackButton @click="goToHome"></BackButton>
        <h2 class="font-bold text-3xl text-gray-700 text-center mb-6">Frequently Asked Questions</h2>
  
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item border-b border-gray-200 py-5">
          <div 
            class="faq-question flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-700"
            @click="toggleFaq(index)"
          >
            <span>{{ faq.question }}</span>
            <span class="text-2xl">{{ faq.expanded ? '-' : '+' }}</span>
          </div>
          <div 
            v-if="faq.expanded" 
            class="faq-answer text-gray-600 text-sm mt-4 leading-relaxed"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import BackButton from "@/components/buttons/BackButton.vue";
  
  // Router for navigation
  const router = useRouter();
  
  // FAQ data
  const faqs = ref([
    {
      question: "Do you ship overseas?",
      answer: "Yes, we ship all over the world. Shipping costs will apply, and will be added at checkout.",
      expanded: false,
    },
    {
      question: "How long will it take to get my orders?",
      answer: "Delivery times vary depending on location and shipping method chosen at checkout.",
      expanded: false,
    },
    {
      question: "Any question?",
      answer: "You can contact us through our contact page! We will be happy to assist you.",
      expanded: false,
    },
  ]);
  
  // Toggle FAQ
  const toggleFaq = (index) => {
    faqs.value[index].expanded = !faqs.value[index].expanded;
  };
  
  // Go back to Home Page
  const goToHome = () => {
    router.push("/home");
  };
  </script>
  
  <style scoped>
  .faq-item {
    transition: all 0.3s ease;
  }
  .faq-question:hover {
    color: #ff6b35; /* Optional hover effect for question */
  }
  </style>
  