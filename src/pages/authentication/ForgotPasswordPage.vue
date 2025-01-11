<template>
    <section class="bg-gray-50 flex items-center justify-center py-10 min-h-screen">
      <div class="f-container-1200 bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-4xl w-full">
        <BackButton @click="goToHome"></BackButton>
        <div class="flex flex-col gap-10">
          <h2 class="font-bold text-3xl text-gray-700 text-center mb-4">Forgot Password</h2>
          <p class="text-center text-gray-500 text-sm mb-6">
            Enter your email address, and we'll send you a link to reset your password.
          </p>
          <form @submit.prevent="sendResetEmail" class="space-y-5">
            <!-- Email Input -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email address"
                required
              />
            </div>
  
            <!-- Error Message -->
            <p v-if="errMsg" class="text-red-500 text-sm">{{ errMsg }}</p>
  
            <!-- Success Message -->
            <p v-if="successMsg" class="text-green-500 text-sm">{{ successMsg }}</p>
  
            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 flex justify-center items-center"
              :disabled="loading"
            >
              <span v-if="loading" class="loader mr-2"></span>
              {{ loading ? "Processing..." : "Send Reset Email" }}
            </button>
          </form>
  
          <!-- Back to Sign-In -->
          <p class="text-sm text-center mt-4 text-gray-600">
            Remember your password? 
            <router-link :to="{ name: 'sign-in-page' }" class="text-blue-500 hover:underline">
              Sign In
            </router-link>
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { getAuth, sendPasswordResetEmail } from "firebase/auth";
  import BackButton from "@/components/buttons/BackButton.vue";
  
  const email = ref("");
  const errMsg = ref("");
  const successMsg = ref("");
  const loading = ref(false);
  const router = useRouter();
  
  const sendResetEmail = () => {
    errMsg.value = "";
    successMsg.value = "";
    loading.value = true;
  
    const auth = getAuth();
    sendPasswordResetEmail(auth, email.value)
      .then(() => {
        successMsg.value = "A reset link has been sent to your email address.";
        email.value = ""; // Clear email input
      })
      .catch((error) => {
        console.error("Failed to send reset email:", error.message);
        switch (error.code) {
          case "auth/user-not-found":
            errMsg.value = "No account with that email was found.";
            break;
          case "auth/invalid-email":
            errMsg.value = "Invalid email address.";
            break;
          default:
            errMsg.value = "Failed to send reset email. Please try again.";
            break;
        }
      })
      .finally(() => {
        loading.value = false;
      });
  };
  
  const goToHome = () => {
    router.push("/home");
  };
  </script>
  
  <style>
  .loader {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  