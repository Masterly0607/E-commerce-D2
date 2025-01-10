<template>
  <div class="contact-us w-full max-w-4xl mx-auto px-4 py-16 space-y-16">
    <!-- Header Section -->
    <div class="text-center">
      <h1 class="text-5xl font-extrabold text-gray-800">Contact Us</h1>
      <p class="mt-4 text-lg text-gray-600">
        Have questions or feedback? We'd love to hear from you. Reach out to us!
      </p>
      <div class="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
    </div>

    <!-- Form Section -->
    <form @submit.prevent="submitForm" class="space-y-8">
      <!-- Name and Email Inputs -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label for="name" class="block text-lg font-semibold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Enter your name"
            class="w-full border border-gray-300 rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>
        <div>
          <label for="email" class="block text-lg font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            class="w-full border border-gray-300 rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>
      </div>

      <!-- Message Textarea -->
      <div>
        <label for="message" class="block text-lg font-semibold text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          v-model="message"
          rows="5"
          placeholder="Write your message..."
          class="w-full border border-gray-300 rounded-lg py-3 px-6 focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-green-500 text-white font-semibold py-3 px-10 rounded-full hover:bg-green-600 transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      if (this.name && this.email && this.message) {
        alert("Thank you for contacting us. We will get back to you shortly!");
        this.name = "";
        this.email = "";
        this.message = "";
      } else {
        alert("Please fill out all fields before submitting.");
      }
    },
  },
};
</script>

<style scoped>
/* Form Styling Enhancements */
input,
textarea {
  background-color: #f9f9f9;
  font-size: 16px;
  color: #333;
}

input::placeholder,
textarea::placeholder {
  color: #aaa;
}

textarea {
  resize: none; /* Disable resizing */
}

button {
  cursor: pointer;
}

/* Media Query for Responsive Design */
@media (max-width: 640px) {
  .contact-us {
    padding: 20px;
  }
}
</style>
