// stores/user.js
import { defineStore } from "pinia"; // defineStore:  A function provided by Pinia to create a store
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {

  // State
  const isLoggedIn = ref(JSON.parse(localStorage.getItem("isLoggedIn") || "false"));
  // Local Storage: is a browser API that allows you to store and retrieve data as key-value pairs. (Store string)
  
  // localStorage.getItem(key): gets the value stored in localStorage for the provided key. If a value exists for the key "isLoggedIn", it returns that value (as a string). If no value exists, it returns null.
  
  // JSON.parse: converts string to bolean value. Ex:  Converts the string "true" to true or "false" to false.
  
  // "false"(fallback value): If there’s no value in localStorage for "isLoggedIn", the expression defaults to the string "false". This ensures that if the value doesn’t exist in localStorage, the app assumes the user is logged out by default.

   // Action
  const setLoggedIn = (status) => {
    isLoggedIn.value = status;
    if (!status) {
      localStorage.removeItem("isLoggedIn"); // If status is false (user logged out), it removes the "isLoggedIn" key from localStorage:
    } else {
      localStorage.setItem("isLoggedIn", JSON.stringify(status));
    // If status is true (user logged in), it stores the value in localStorage
    // JSON.stringify: converts it into the string "true"
    }
  };

  return { isLoggedIn, setLoggedIn };
});
