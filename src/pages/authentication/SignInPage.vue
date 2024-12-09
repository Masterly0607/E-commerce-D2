<template>
  <section
    class="bg-gray-50 flex items-center justify-center py-10 min-h-screen"
  >
    <div
      class="f-container-1200 bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-4xl w-full"
    >
      <BackButton @click="goToHome"></BackButton>
      <div class="flex flex-col md:flex-row gap-10">
        <!-- Form Section -->
        <div class="md:w-1/2">
          <h2 class="font-bold text-3xl text-gray-700 text-center mb-4">
            Sign In
          </h2>
          <p class="text-center text-gray-500 text-sm mb-6">
            Don't have an account yet?
            <router-link
              :to="{ name: 'sign-up-page' }"
              class="text-blue-500 hover:underline"
              >Sign Up</router-link
            >
          </p>
          <form @submit.prevent="login" class="space-y-5">
            <!-- Email Input -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-600 mb-1"
                >Email</label
              >
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
              <label
                for="password"
                class="block text-sm font-medium text-gray-600 mb-1"
                >Password</label
              >
              <input
                type="password"
                id="password"
                v-model="password"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <!-- Error Message -->
            <p v-if="errMsg" class="text-red-500 text-sm">{{ errMsg }}</p>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300 flex justify-center items-center"
              :disabled="loading"
            >
              <span v-if="loading" class="loader mr-2"></span>
              {{ loading ? "Processing..." : "Sign In" }}
            </button>
          </form>

          <!-- Forget password -->
          <div class="mt-5 flex justify-between  ">
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="checkbox"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label for="checkbox" class="text-sm font-medium text-gray-700"
                >Remember Me</label
              >
            </div>

            <div class="text-center text-gray-500 text-sm ">
              <router-link
                :to="{ name: 'sign-up-page' }"
                class="text-blue-500 hover:underline"
                >Forget Password?</router-link
              >
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="md:w-1/2 flex justify-center">
          <img
            src="/public/images/signIn.jpg"
            alt="Sign In"
            class="object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import BackButton from "@/components/buttons/backButton/backButton.vue";
// State
const email = ref("");
const password = ref("");
const errMsg = ref("");
const loading = ref(false); // Loading state
const router = useRouter();

// Functions
const login = () => {
  loading.value = true; // Start loading
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Successfully signed in!");
      loading.value = false; // Stop loading
      router.push("/home");
    })
    .catch((error) => {
      console.error("Failed to sign in:", error.message);
      loading.value = false; // Stop loading

      // Handle Errors
      switch (error.code) {
        case "auth/invalid-password":
          errMsg.value = "Invalid password";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
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
