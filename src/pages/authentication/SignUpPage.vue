<template>
  <section class="bg-gray-50 flex items-center justify-center py-10">
    <div class="f-container-1200 bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-4xl w-full">
      <BackButton @click="goToHome"></BackButton>
      <div class="flex flex-col md:flex-row gap-10">
        <!-- Image Section -->
        <div class="md:w-1/2 flex justify-center">
          <img src="/public/images/sign-up.jpg" alt="Sign Up" class="object-contain" />
        </div>

        <!-- Form Section -->
        <div class="md:w-1/2">
          <h2 class="font-bold text-3xl text-gray-700 text-center mb-4">Create an Account</h2>
          <p class="text-center text-gray-500 text-sm mb-6">
            Already have an account?
            <router-link class="text-blue-500 hover:underline" :to="{ name: 'sign-in-page' }">Sign In</router-link>
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
                @blur="validateEmail"
                required
              />
              <p v-if="emailError" class="text-sm text-red-500 mt-1">{{ emailError }}</p>
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
              <p v-if="passwordError" class="text-sm text-red-500 mt-1">{{ passwordError }}</p>
            </div>

            <!-- Confirm Password Input -->
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                v-model="confirmPassword"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Confirm your password"
                required
              />
              <p v-if="confirmPasswordError" class="text-sm text-red-500 mt-1">{{ confirmPasswordError }}</p>
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
import BackButton from "@/components/buttons/BackButton.vue";

// State
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const emailError = ref("");
const passwordError = ref("");
const confirmPasswordError = ref("");
const loading = ref(false);
const router = useRouter();

// Functions
const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value) {
    emailError.value = "Email is required.";
  } else if (!emailPattern.test(email.value)) {
    emailError.value = "Please enter a valid email address.";
  } else {
    emailError.value = "";
  }
};

const validateInputs = () => {
  emailError.value = "";
  passwordError.value = "";
  confirmPasswordError.value = "";

  // Validate Email
  validateEmail();

  // Validate Password
  if (!password.value) {
    passwordError.value = "Password is required.";
  } else if (password.value.length < 6) {
    passwordError.value = "Password must be at least 6 characters.";
  }

  // Validate Confirm Password
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = "Passwords do not match.";
  }

  return !emailError.value && !passwordError.value && !confirmPasswordError.value;
};

const register = () => {
  if (!validateInputs()) return;

  loading.value = true;
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Successfully registered!");
      loading.value = false;
      router.push({ name: "sign-in-page" });
    })
    .catch((error) => {
      console.error("Failed to register:", error.message);
      loading.value = false;
      if (error.message.includes("email-already-in-use")) {
        emailError.value = "This email is already registered.";
      }
    });
};

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  try {
    // Try using the popup
    await signInWithPopup(auth, provider);
    router.push("/home");
  } catch (error) {
    if (error.code === "auth/popup-blocked") {
      // If popup is blocked, use redirect
      console.log("Popup blocked, switching to redirect...");
      await signInWithRedirect(auth, provider);
    } else {
      console.error("Sign-In Error:", error.message);
      alert("Something went wrong: " + error.message);
    }
  }
};



const goToHome = () => {
  router.push("/home");
};
</script>
