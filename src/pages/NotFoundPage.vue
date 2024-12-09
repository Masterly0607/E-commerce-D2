<template>
    <div class="error-page">
      <div class="error-content">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <router-link to="/" class="back-home">
          Go Back Home
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  .error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background-color: #f8f9fa;
  }
  
  .error-content {
    max-width: 600px;
    padding: 20px;
  }
  
  .error-content h1 {
    font-size: 6rem;
    margin-bottom: 20px;
    color: #ff6b6b;
  }
  
  .error-content p {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #343a40;
  }
  
  .back-home {
    text-decoration: none;
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border-radius: 5px;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .back-home:hover {
    background-color: #0056b3;
  }
  </style>
  