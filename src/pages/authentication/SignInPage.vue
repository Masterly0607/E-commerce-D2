<template>
  <section class="bg-gray-50 flex items-center justify-center py-10 min-h-screen">
    <div class="f-container-1200 bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-4xl w-full">
      <BackButton @click="goToHome"></BackButton>
      <div class="flex flex-col md:flex-row gap-10">
        <!-- Form Section -->
        <div class="md:w-1/2">
          <h2 class="font-bold text-3xl text-gray-700 text-center mb-4">Sign In</h2>
          <p class="text-center text-gray-500 text-sm mb-6">
            Don't have an account yet?
            <router-link :to="{ name: 'sign-up-page' }" class="text-blue-500 hover:underline">Sign Up</router-link>
          </p>
          <form @submit.prevent="login" class="space-y-5">
            <!-- Email Input -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                @input="validateField('email')"
                class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                :class="{ 'border-red-500': errors.email }"
                placeholder="Enter your email"
                required
              />
              <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
            </div>

            <!-- Password Input -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                type="password"
                id="password"
                v-model="password"
                @input="validateField('password')"
                class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                :class="{ 'border-red-500': errors.password }"
                placeholder="Enter your password"
                required
              />
              <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>
            </div>

            <!-- Error Message -->
            <p v-if="errMsg" class="text-red-500 text-sm">{{ errMsg }}</p>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 flex justify-center items-center"
              :disabled="loading"
            >
              <span v-if="loading" class="loader mr-2"></span>
              {{ loading ? "Processing..." : "Sign In" }}
            </button>
          </form>

          <!-- Or Sign In with Google -->
          <div class="text-center mt-4">
            <button
              @click="signInWithGoogle"
              class="w-full py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              Sign In with Google
            </button>
          </div>

          <!-- Forget Password -->
          <div class="mt-5 flex justify-between">
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="checkbox"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label for="checkbox" class="text-sm font-medium text-gray-700">Remember Me</label>
            </div>

            <div class="text-center text-gray-500 text-sm">
              <router-link
                :to="{ name: 'forgot-password-page' }"
                class="text-blue-500 hover:underline"
              >
                Forgot Password?
              </router-link>
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="md:w-1/2 flex justify-center">
          <img src="/public/images/sign-in.webp" alt="Sign In" class="object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import BackButton from "@/components/buttons/BackButton.vue";

const email = ref("");
const password = ref("");
const errors = ref({});
const errMsg = ref("");
const loading = ref(false);
const router = useRouter();

const validateField = (field) => {
  switch (field) {
    case "email":
      errors.value.email = email.value
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
          ? ""
          : "Invalid email format"
        : "Email is required.";
      break;
    case "password":
      errors.value.password = password.value
        ? password.value.length >= 6
          ? ""
          : "Password must be at least 6 characters."
        : "Password is required.";
      break;
    default:
      break;
  }
};

const login = () => {
  validateField("email");
  validateField("password");

  if (errors.value.email || errors.value.password) {
    errMsg.value = "Please fix the errors before proceeding.";
    return;
  }

  loading.value = true;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((result) => {
      const user = result.user;

      // Save user profile
      const profile = {
        name: user.displayName || "User",
        email: user.email,
      };
      localStorage.setItem("userProfile", JSON.stringify(profile));
      localStorage.setItem("isUserLoggedIn", "true");

      // Redirect to profile settings
      router.push({ name: "profile-setting-page" });
    })
    .catch((error) => {
      console.error("Sign in failed:", error.message);
      errMsg.value = "Invalid email or password.";
    })
    .finally(() => {
      loading.value = false;
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      // Save user profile
      const profile = {
        name: user.displayName,
        email: user.email,
      };
      localStorage.setItem("userProfile", JSON.stringify(profile));
      localStorage.setItem("isUserLoggedIn", "true");

      // Redirect to profile settings
      router.push({ name: "profile-setting-page" });
    })
    .catch((error) => {
      console.error("Google sign-in failed:", error.message);
      errMsg.value = "Google sign-in failed. Try again.";
    });
};

const goToHome = () => {
  router.push("/");
};
</script>
