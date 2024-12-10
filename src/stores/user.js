// stores/user.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  // Initialize `isLoggedIn` state from localStorage with a default of `false`
  const isLoggedIn = ref(JSON.parse(localStorage.getItem("isLoggedIn") || "false"));

  // Function to update the login state and persist to localStorage
  const setLoggedIn = (status) => {
    isLoggedIn.value = status;
    if (!status) {
      localStorage.removeItem("isLoggedIn");
    } else {
      localStorage.setItem("isLoggedIn", JSON.stringify(status));
    }
  };

  return { isLoggedIn, setLoggedIn };
});
