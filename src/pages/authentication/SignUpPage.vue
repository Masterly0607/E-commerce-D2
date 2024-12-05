<template>
    <section class=" bg-gray-50 flex items-center justify-center py-10">
      <div class="f-container-1200 bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-4xl w-full">
     
          <!-- <button class="text-black hover:underline text-sm mb-4" @click="goToHome">Back</button>
         -->
          <BackButton @click="goToHome"></BackButton>
        
        <div class="flex flex-col md:flex-row gap-10">
  
          <!-- Image Section -->
          <div class="md:w-1/2 flex justify-center">
            <img src="/public/images/sign-up.svg" alt="Sign Up" class="object-contain " />
          </div>
  
          <!-- Form Section -->
          <div class="md:w-1/2">
            <h2 class="font-bold text-3xl text-gray-700 text-center mb-4">Create an Account</h2>
            <p class="text-center text-gray-500 text-sm mb-6">
              Already have an account? 
              <a href="/sign-in" class="text-blue-500 hover:underline">Login</a>
            </p>
            <form @submit.prevent="register" class="space-y-5">
              <!-- Email Input -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
  
              <!-- Password Input -->
              <div>
                <label for="password" class="block text-sm font-medium text-gray-600 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
  
              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300 flex justify-center items-center"
                :disabled="loading"
              >
                <span v-if="loading" class="loader mr-2"></span>
                {{ loading ? "Processing..." : "Sign Up" }}
              </button>
            </form>
  
            <!-- Divider -->
            <div class="my-5 flex items-center justify-between">
              <hr class="w-1/3 border-gray-300" />
              <span class="text-sm text-gray-500">or</span>
              <hr class="w-1/3 border-gray-300" />
            </div>
  
            <!-- Google Sign-Up -->
            <button
              @click="signInWithGoogle"
              class="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition duration-300"
            >
              <img src="/public/images/google.svg" alt="Google" class="h-5 w-5" />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
import BackButton from "@/components/buttons/backButton/backButton.vue";
  
  // State
  const email = ref("");
  const password = ref("");
  const loading = ref(false); // Loading state
  const router = useRouter();
  
  // Functions
  const register = () => {
    loading.value = true; // Start loading
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then(() => {
        console.log("Successfully registered!");
        loading.value = false; // Stop loading
        router.push("/sign-in");
      })
      .catch((error) => {
        console.error("Failed to register:", error.message);
        loading.value = false; // Stop loading
      });
  };
  
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log(result.user);
        router.push("/home");
      })
      .catch((error) => {
        console.error("Google Sign-In Failed:", error.message);
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
  