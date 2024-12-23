<template>
    <div class="profile-page">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <router-link to="/">Home</router-link> / 
        <span>My Account</span>
      </div>
  
      <div class="profile-container">
           <!-- Sidebar -->
        <aside class="sidebar">
          <div class="user-info">
            <div class="avatar">
              <img src="https://via.placeholder.com/50" alt="User Avatar" />
            </div>
            <div class="user-details">
              <p class="user-name">Veth Sivhuo</p>
              <p class="user-email">s***@gmail.com</p>
            </div>
          </div>
  
          <nav class="sidebar-nav">
            <section>
              <h3>Manage My Account</h3>
              <a href="#" class="nav-link">My Profile</a>
              <a href="#" class="nav-link">Address Book</a>
              <a href="#" class="nav-link">My Payment Options</a>
            </section>
  
            <section>
              <h3>My Orders</h3>
              <a href="#" class="nav-link">My Returns</a>
              <a href="#" class="nav-link">My Cancellations</a>
            </section>
  
            <section>
              <h3>My Wishlist</h3>
            </section>
          </nav>
        </aside>
  
        <!-- Main Content -->
        <main class="main-content">
          <div class="header">
            <h1>My Profile</h1>
            <p class="description">Review and update this account's information.</p>
          </div>
  
          <div class="info-card">
            <div class="card-header">
              <h3>User Information</h3>
              <button class="edit-btn">Edit</button>
            </div>
            <div class="card-content">
              <div class="info-row">
                <label>Name</label>
                <span>Veth Sivhuo</span>
              </div>
              <div class="info-row">
                <label>Email</label>
                <span>vethsivhuo@gmail.com</span>
              </div>
              <div class="info-row">
                <label>Address</label>
                <span>Toulkok, Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfilePage',
    data() {
      return {
        userData: {
          name: 'Veth Sivhuo',
          email: 'vethsivhuo@gmail.com',
          address: 'Toulkok, Phnom Penh, Cambodia'
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .profile-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .breadcrumb {
    margin-bottom: 20px;
    color: #666;
  }
  
  .breadcrumb a {
    color: #666;
    text-decoration: none;
  }
  
  .profile-container {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 30px;
  }
  
  /* Sidebar Styles */
  .sidebar {
    width: 250px;
    padding: 20px;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .avatar img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .user-details {
    margin-left: 10px;
  }
  .user-name {
    font-weight: bold;
  }
  .user-email {
    color: #888;
    font-size: 14px;
  }
  .sidebar-nav section {
    margin-bottom: 20px;
  }
  
  .sidebar-nav h3 {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: Bold;
  }
  
  .nav-link {
    display: block;
    color: gray;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 8px;
  }
  
  /* Main Content Styles */
  .main-content {
    background: white;
    padding: 20px;
  }
  
  .header h1 {
    margin: 0;
    font-size: 24px;
  }
  
  .description {
    color: gray;
    margin: 10px 0 30px;
  }
  
  .info-card {
    border: 1px solid #eee;
    border-radius: 4px;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #f8f8f8;
    border-bottom: 1px solid #eee;
  }
  
  .card-header h3 {
    margin: 0;
    font-size: 16px;
  }
  
  .edit-btn {
    padding: 6px 15px;
    border: 1px solid #666;
    background: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .info-row {
    display: grid;
    grid-template-columns: 120px 1fr;
    margin-bottom: 15px;
  }
  
  .info-row label {
    color: #666;
    font-weight: 500;
  }
  </style>
  