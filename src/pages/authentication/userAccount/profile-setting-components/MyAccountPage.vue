<template>
  <section>
    <div class="profile-page">
      <div class="profile-container">
        <aside class="sidebar">
          <div class="user-info">
            <div class="avatar">
              <img src="/public/images/profile.png" alt="User Avatar" />
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
              <a href="#" class="nav-link">Payment Methods</a>
            </section>

            <section>
              <h3>My Orders</h3>
              <a href="#" class="nav-link">My Returns</a>
              <a href="#" class="nav-link">My Cancellations</a>
            </section>

            <section>
              <h3>My Wishlist</h3>
              <a href="#" class="nav-link">Wishlist</a>
            </section>
          </nav>
        </aside>

  
        <main class="main-content">
          <div class="header">
            <h1>My Profile</h1>
            <p class="description">Review and update your account information below.</p>
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
  </section>
</template>

<script setup>
const userData = [
  {
    name: "Veth Sivhuo",
    email: "vethsivhuo@gmail.com",
    address: "Toulkok, Phnom Penh, Cambodia",
  },
];
</script>

<style scoped>

body {
  font-family: "Roboto", sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.profile-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
}


.profile-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 30px;
}


.sidebar {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.166);
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 20px;
}

.avatar img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
  border: 2px solid #007bff;
}

.user-details {
  margin-left: 15px;
}

.user-name {
  font-size: 20px;
  font-weight: 700;
  color: #222;
}

.user-email {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

.sidebar-nav section {
  margin-bottom: 30px;
}

.sidebar-nav h3 {
  font-size: 16px;
  font-weight: 600;
  color: #444;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-link {
  display: block;
  font-size: 15px;
  color: #555;
  text-decoration: none;
  padding: 10px 0;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #007bff;
  color: white;
  padding-left: 10px;
}

.main-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.166);
}

.header h1 {
  font-size: 26px;
  color: #222;
  margin-bottom: 10px;
  font-weight: bold;
}

.description {
  font-size: 15px;
  color: #666;
  margin-bottom: 30px;
}

.info-card {
  border: 1px solid #eaeaea;
  border-radius: 10px;
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  padding: 15px 20px;
  border-bottom: 1px solid #eaeaea;
}

.card-header h3 {
  font-size: 18px;
  color: #333;
}

.edit-btn {
  padding: 8px 15px;
  font-size: 14px;
  color: #007bff;
  background-color: transparent;
  border: 1px solid #007bff;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.edit-btn:hover {
  background-color: #007bff;
  color: white;
}

.card-content {
  padding: 20px;
}

.info-row {
  display: grid;
  grid-template-columns: 150px 1fr;
  margin-bottom: 20px;
}

.info-row label {
  font-weight: 600;
  font-size: 14px;
  color: #555;
}

.info-row span {
  font-weight: 400;
  font-size: 14px;
  color: #333;
}

@media (max-width: 768px) {
  .profile-container {
    grid-template-columns: 1fr;
  }

  .sidebar {
    margin-bottom: 30px;
  }
}
</style>
