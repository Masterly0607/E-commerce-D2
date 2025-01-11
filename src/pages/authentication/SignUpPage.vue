<template>
  <section class="bg-gray-50 flex items-center justify-center py-10">
    <div class="f-container-1200 bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-4xl w-full">
      <BackButton @click="goToHome"></BackButton>
      <div class="flex flex-col md:flex-row gap-10">
        <!-- Image Section -->
        <div class="md:w-1/2 flex justify-center">
          <img src="/public/images/sign-up.webp" alt="Sign Up" class="object-contain" />
        </div>

        <!-- Form Section -->
        <div class="md:w-1/2">
          <h2 class="font-bold text-3xl text-gray-700 text-center mb-4">Create an Account</h2>
          <form @submit.prevent="register" class="space-y-5">
            <!-- Gender Input -->
            <div>
              <label for="gender" class="block text-sm font-medium text-gray-600 mb-1">Gender</label>
              <select
                id="gender"
                v-model="form.gender"
                @input="validateField('gender')"
                class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                :class="{ 'border-red-500': errors.gender }"
                required
              >
                <option value="" disabled>Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <p v-if="errors.gender" class="text-red-500 text-sm">{{ errors.gender }}</p>
            </div>

            <!-- First Name Input -->
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                v-model="form.firstName"
                @input="validateField('firstName')"
                class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                :class="{ 'border-red-500': errors.firstName }"
                placeholder="Enter your first name"
                required
              />
              <p v-if="errors.firstName" class="text-red-500 text-sm">{{ errors.firstName }}</p>
            </div>

            <!-- Last Name Input -->
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                v-model="form.lastName"
                @input="validateField('lastName')"
                class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                :class="{ 'border-red-500': errors.lastName }"
                placeholder="Enter your last name"
                required
              />
              <p v-if="errors.lastName" class="text-red-500 text-sm">{{ errors.lastName }}</p>
            </div>

            <!-- Email Input -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
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
                v-model="form.password"
                @input="validateField('password')"
                class="w-full px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                :class="{ 'border-red-500': errors.password }"
                placeholder="Enter your password"
                required
              />
              <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>
            </div>

            <!-- Sign-Up Button -->
            <button
              type="submit"
              class="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
              :disabled="loading"
            >
              {{ loading ? "Processing..." : "Sign Up" }}
            </button>
          </form>

          <!-- Link to Sign-In Page -->
          <p class="text-sm text-center mt-4 text-gray-600">
            Already have an account? 
            <router-link :to="{ name: 'sign-in-page' }" class="text-blue-500 hover:underline">
              Sign In
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import BackButton from "@/components/buttons/BackButton.vue";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
});

const errors = reactive({});
const loading = ref(false);
const router = useRouter();

// Validate a single field in real-time
const validateField = (field) => {
  const value = form[field];
  switch (field) {
    case "gender":
      errors.gender = value ? "" : "Please select your gender.";
      break;
    case "firstName":
      errors.firstName = value.trim() ? "" : "First name is required.";
      break;
    case "lastName":
      errors.lastName = value.trim() ? "" : "Last name is required.";
      break;
    case "email":
      if (!value.trim()) {
        errors.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors.email = "Invalid email format.";
      } else {
        errors.email = "";
      }
      break;
    case "password":
      if (!value.trim()) {
        errors.password = "Password is required.";
      } else if (value.length < 6) {
        errors.password = "Password must be at least 6 characters.";
      } else {
        errors.password = "";
      }
      break;
    default:
      break;
  }
};

const register = () => {
  // Validate all fields before submission
  Object.keys(form).forEach(validateField);
  if (Object.values(errors).some((error) => error)) return;

  loading.value = true;

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, form.email, form.password)
    .then(() => {
      const userProfile = {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        gender: form.gender,
      };
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
      localStorage.setItem("isUserLoggedIn", "true");
      router.push({ name: "profile-setting-page" });
    })
    .catch((error) => {
      console.error("Registration failed:", error.message);
      alert("Error: " + error.message);
    })
    .finally(() => {
      loading.value = false;
    });
};

const goToHome = () => {
  router.push("/");
};
</script>
